<?php

namespace App\Http\Controllers;

use App\Models\EmailAccount;
use App\Services\IMAPMailService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Webklex\PHPIMAP\Exceptions\MaskNotFoundException;

class SettingsController extends Controller
{


    /**
     *
     * save the imap setting for the user
     *
     * @param Request $request
     * @return InertiaResponse
     */
    public function accounts(Request $request): InertiaResponse
    {
        $accounts = EmailAccount::where('user_id', auth()->id())->get();
        return Inertia::render('Settings', [
            'accounts' => $accounts
        ]);
    }


    /**
     *
     * add an account
     *
     * @param Request $request
     * @param IMAPMailService $IMAPMailService
     * @return InertiaResponse|RedirectResponse
     * @throws MaskNotFoundException
     */
    public function account_add(Request $request, IMAPMailService $IMAPMailService): InertiaResponse|RedirectResponse
    {
        if($request->isMethod('POST')){
            $data = $request->validate([
                'name' => 'required|unique:email_accounts,name',
                'imap_host' => 'required|string',
                'imap_port' => 'required|numeric',
                'imap_encryption' => 'required|in:false,ssl,tls,starttls,notls',
                'imap_username' => 'required|string',
                'imap_password' => 'required',
            ]);
            $data['user_id'] = auth()->id();
            $cm = $IMAPMailService->getClientManager()->make([
                'host'          => $data['imap_host'],
                'port'          => $data['imap_port'],
                'encryption'    => $data['imap_encryption'],
                'validate_cert' => true,
                'username'      => $data['imap_username'],
                'password'      => $data['imap_password'],
                'protocol'      => 'imap'
            ]);
            $cm->connect();
            if($cm->isConnected()){
                if(auth()->user()->accounts()->count() <= 0){
                    $data['is_default'] = true;
                }
                auth()->user()->accounts()->create($data);
                return redirect()->route('settings.accounts')->with('success', 'Your email is connected successfully.');
            }else{
                return redirect()->back()->with('error', 'Not able to connect to the email server.');
            }
        }
        return Inertia::render('Account');
    }


}
