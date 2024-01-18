<?php

namespace App\Http\Controllers;

use App\Services\IMAPMailService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Webklex\PHPIMAP\Exceptions\AuthFailedException;
use Webklex\PHPIMAP\Exceptions\ConnectionFailedException;
use Webklex\PHPIMAP\Exceptions\FolderFetchingException;
use Webklex\PHPIMAP\Exceptions\ImapBadRequestException;
use Webklex\PHPIMAP\Exceptions\ImapServerErrorException;
use Webklex\PHPIMAP\Exceptions\ResponseException;
use Webklex\PHPIMAP\Exceptions\RuntimeException;

class IMAPController extends Controller
{

    private Collection $folders;
    private array $first_folder;
    private IMAPMailService $IMAPMailService;


    /**
     *
     * get the folder and redirect to the view
     *
     * @param IMAPMailService $IMAPMailService
     * @return RedirectResponse
     * @throws AuthFailedException
     * @throws ConnectionFailedException
     * @throws FolderFetchingException
     * @throws ImapBadRequestException
     * @throws ImapServerErrorException
     * @throws ResponseException
     * @throws RuntimeException
     */
    public function mailbox(IMAPMailService $IMAPMailService): RedirectResponse
    {
        $this->IMAPMailService = $IMAPMailService;
        $this->folders = $this->IMAPMailService->get_serialized_folders();
        $this->first_folder = $this->IMAPMailService->get_serialized_first_folder();
        return Redirect::route('imap.mailbox.open.folder', ['folder' => $this->first_folder['name']]);
    }


    /**
     *
     * send response to the view to display data
     *
     * @param string $folder
     * @param IMAPMailService $IMAPMailService
     * @return InertiaResponse
     * @throws AuthFailedException
     * @throws ConnectionFailedException
     * @throws FolderFetchingException
     * @throws ImapBadRequestException
     * @throws ImapServerErrorException
     * @throws ResponseException
     * @throws RuntimeException
     */
    public function open_folder(string $folder, IMAPMailService $IMAPMailService): InertiaResponse
    {
        $folder = $IMAPMailService->get_folder($folder);
        $folders = $IMAPMailService->get_serialized_folders();
        $messages = $IMAPMailService->get_serialize_messages($folder);
        return Inertia::render('Mailbox/Inbox', [
            'folders' => $folders,
            'messages' => $messages
        ]);
    }


}
