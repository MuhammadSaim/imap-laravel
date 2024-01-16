<?php

namespace App\Providers;

use App\Services\IMAPMailService;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // register the singleton service for the IMAP
        $this->app->singleton(IMAPMailService::class, function (Application $app) {
            return new IMAPMailService();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
