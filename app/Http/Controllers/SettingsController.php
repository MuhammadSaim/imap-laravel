<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class SettingsController extends Controller
{


    /**
     *
     * save the imap setting for the user
     *
     * @param Request $request
     * @return InertiaResponse
     */
    public function save(Request $request): InertiaResponse
    {
        if($request->isMethod('POST')){
            $data = $request->validate([
                'imap_host' => 'required|string',
                'imap_port' => 'required|numeric',
                'imap_encryption' => 'required|in:false,ssl,tls,starttls,notls',
                'imap_username' => 'required|string',
                'imap_password' => 'required',
            ]);
            auth()->user()->settings()->update($data);
        }
        $accounts = User::where('id', auth()->id())->with('accounts')->first();
        return Inertia::render('Settings', [
            'accounts' => $accounts
        ]);
    }


    /**
     *
     * add an account
     *
     * @param Request $request
     * @return InertiaResponse
     */
    public function account_add(Request $request): InertiaResponse
    {
        return Inertia::render('Account');
    }


}
