<?php

namespace App\Http\Controllers;

use App\Services\IMAPMailService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class IMAPController extends Controller
{

    public function show(Request $request, IMAPMailService $IMAPMailService): InertiaResponse
    {
        $folders = $IMAPMailService->get_serialized_folders();
        return Inertia::render('Mailbox/Inbox', [
            'folders' => $folders
        ]);
    }

}
