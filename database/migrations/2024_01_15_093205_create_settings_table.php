<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('CASCADE')
                    ->onUpdate('CASCADE');
            $table->string('imap_host')->nullable();
            $table->string('imap_port')->nullable();
            $table->string('imap_protocol')->default('imap');
            $table->string('imap_encryption')->default('tls');
            $table->boolean('imap_validate_cert')->default(true);
            $table->string('imap_username')->nullable();
            $table->string('imap_password')->nullable();
            $table->string('imap_authentication')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
