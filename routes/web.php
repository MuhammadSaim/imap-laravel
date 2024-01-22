<?php

use App\Http\Controllers\IMAPController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // IMAP settings
    Route::get('/mailbox', [IMAPController::class, 'mailbox'])->name('imap.mailbox');
    Route::get('/mailbox/{folder}', [IMAPController::class, 'open_folder'])->name('imap.mailbox.open.folder');

    // settings
    Route::prefix('/settings')->name('settings.')->group(function (){
        Route::match(['GET', 'POST'], '/accounts', [SettingsController::class, 'save'])->name('accounts');
        Route::match(['GET', 'POST'], '/add-account', [SettingsController::class, 'account_add'])->name('account.add');
    });
});

require __DIR__.'/auth.php';
