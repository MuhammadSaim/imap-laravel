<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Webklex\PHPIMAP\Attribute;
use Webklex\PHPIMAP\Client;
use Webklex\PHPIMAP\ClientManager;
use Webklex\PHPIMAP\Exceptions\AuthFailedException;
use Webklex\PHPIMAP\Exceptions\ConnectionFailedException;
use Webklex\PHPIMAP\Exceptions\FolderFetchingException;
use Webklex\PHPIMAP\Exceptions\GetMessagesFailedException;
use Webklex\PHPIMAP\Exceptions\ImapBadRequestException;
use Webklex\PHPIMAP\Exceptions\ImapServerErrorException;
use Webklex\PHPIMAP\Exceptions\MaskNotFoundException;
use Webklex\PHPIMAP\Exceptions\ResponseException;
use Webklex\PHPIMAP\Exceptions\RuntimeException;
use Webklex\PHPIMAP\Folder;
use Webklex\PHPIMAP\Query\WhereQuery;
use Webklex\PHPIMAP\Support\FolderCollection;
use Webklex\PHPIMAP\Support\MessageCollection;

class IMAPMailService
{

    // IMAP client manager
    private ClientManager $imap_client_manager;
    // IMAP client for further use
    private Client $imap_client;

    // authenticated user
    private User $user;

    /**
     *
     * initialize the service with the data
     *
     * @throws AuthFailedException
     * @throws ConnectionFailedException
     * @throws ImapBadRequestException
     * @throws ImapServerErrorException
     * @throws MaskNotFoundException
     * @throws ResponseException
     * @throws RuntimeException
     */

    /**
     *
     * set the config array and return the client
     *
     * @param array $array
     * @return Client
     * @throws MaskNotFoundException
     */
    public function getClient(array $array = []): Client
    {
        if(count($array) > 0){
            $this->imap_client_manager = new ClientManager();
            $this->imap_client = $this->imap_client_manager->make($array);
        }
        return $this->imap_client;
    }


    /**
     *
     * connect to the IMAP
     *
     * @return $this
     * @throws AuthFailedException
     * @throws ConnectionFailedException
     * @throws ImapBadRequestException
     * @throws ImapServerErrorException
     * @throws ResponseException
     * @throws RuntimeException
     */
    public function connect(): IMAPMailService
    {
        $this->imap_client->connect();
        return $this;
    }


    /**
     *
     * return all the folders from the mailbox
     *
     * @return FolderCollection
     * @throws AuthFailedException
     * @throws ConnectionFailedException
     * @throws FolderFetchingException
     * @throws ImapBadRequestException
     * @throws ImapServerErrorException
     * @throws ResponseException
     * @throws RuntimeException
     */
    public function get_all_folders(): FolderCollection
    {
        return $this->imap_client->getFolders();
    }


    /**
     *
     * will give the
     *
     * @return Folder
     * @throws AuthFailedException
     * @throws ConnectionFailedException
     * @throws FolderFetchingException
     * @throws ImapBadRequestException
     * @throws ImapServerErrorException
     * @throws ResponseException
     * @throws RuntimeException
     */
    public function get_first_folder(): Folder
    {
        return $this->imap_client->getFolders()[0];
    }

    /**
     * @return array
     * @throws AuthFailedException
     * @throws ConnectionFailedException
     * @throws FolderFetchingException
     * @throws ImapBadRequestException
     * @throws ImapServerErrorException
     * @throws ResponseException
     * @throws RuntimeException
     */
    public function get_serialized_first_folder(): array
    {
        return $this->get_serialized_folders()->first();
    }


    /**
     * @return Collection
     * @throws AuthFailedException
     * @throws ConnectionFailedException
     * @throws FolderFetchingException
     * @throws ImapBadRequestException
     * @throws ImapServerErrorException
     * @throws ResponseException
     * @throws RuntimeException
     */
    public function get_serialized_folders(): Collection
    {
        $folders_obj = $this->get_all_folders();
        $folders = collect();
        foreach ($folders_obj as $key => $folder){
            $folders->push([
                'name' => $folder->name,
                'path' => $folder->path,
                'full_name' => $folder->full_name,
                'children' => collect()
            ]);
            if($folder->hasChildren()){
                foreach ($folder->getChildren() as $child){
                    $folders[$key]['children']->push([
                        'name' => $child->name,
                        'path' => $child->path,
                        'full_name' => $child->full_name,
                    ]);
                }
            }
        }
        return $folders;
    }


    /**
     *
     * get the folder by the name
     *
     * @param string $name
     * @return Folder
     * @throws AuthFailedException
     * @throws ConnectionFailedException
     * @throws FolderFetchingException
     * @throws ImapBadRequestException
     * @throws ImapServerErrorException
     * @throws ResponseException
     * @throws RuntimeException
     */
    public function get_folder(string $name): Folder
    {
        return $this->imap_client->getFolderByName($name);
    }


    /**
     *
     * return the messages of the specific folder
     *
     * @param Folder $folder
     * @return MessageCollection
     * @throws AuthFailedException
     * @throws ConnectionFailedException
     * @throws ImapBadRequestException
     * @throws ImapServerErrorException
     * @throws ResponseException
     * @throws RuntimeException
     * @throws GetMessagesFailedException
     */
    public function get_messages(Folder $folder): MessageCollection
    {
        return $folder->query()->setFetchOrderAsc()->all()->get();
    }

    /**
     *
     * get message pagination's
     *
     * @param Folder $folder
     * @param int $per_page
     * @param int $page
     * @param string $page_name
     * @return LengthAwarePaginator
     * @throws AuthFailedException
     * @throws ConnectionFailedException
     * @throws GetMessagesFailedException
     * @throws ImapBadRequestException
     * @throws ImapServerErrorException
     * @throws ResponseException
     * @throws RuntimeException
     */
    public function get_paginate_messages(Folder $folder, int $per_page = 10, int $page = 1, string $page_name = 'imap_page'): LengthAwarePaginator
    {
        return $folder->query()->all()->paginate($per_page, $page, $page_name);
    }


    /**
     *
     * return the messages array
     *
     * @param Folder $folder
     * @return Collection
     */
    public function get_serialize_messages(Folder $folder): Collection
    {
        $messages = collect();
        $messages_obj = $this->get_messages($folder);
        foreach ($messages_obj as $item){
            $messages->push([
                'id'  => $item->getUid(),
                'name' => $this->get_value($item->getFrom(), 'personal'),
                'email' => $this->get_value($item->getFrom(), 'mail'),
                'full_date' => $item->getDate()->toArray()[0]->format('Y-m-d h:i A'),
                'date_humans' => $item->getDate()->toArray()[0]->diffForHumans(),
                'subject' => function() use ($item): string {
                    if(count($item->getSubject()->toArray()) <= 0){
                        return 'No Subject';
                    }
                    return strlen($item->getSubject()->toArray()[0]) > 100 ? 'No Subject' : $item->getSubject()->toArray()[0];
                },
                'flag' => $item->getFlags()->toArray()
            ]);
        }
        return $messages;
    }


    private function get_value(Attribute $attribute, string $key)
    {
        $address = (array)$attribute->first();
        $address = $address[$key];
        return $address;
    }


    /**
     *
     * simple method to return the IMAP client manager
     *
     * @return ClientManager
     */
    public function getClientManager(): ClientManager
    {
        return $this->imap_client_manager;
    }

}
