<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    /**
     *
     * make relation with setting to fetch the settings values
     *
     * @return HasOne
     */
    public function settings(): HasOne
    {
        return $this->hasOne(Setting::class);
    }


    /**
     *
     * relationship with folders
     *
     * @return HasMany
     */
    public function folders(): HasMany
    {
        return $this->hasMany(Folder::class);
    }

    /**
     *
     * relation with all the message
     *
     * @return HasMany
     */
    public function messages(): HasMany
    {
        return $this->hasMany(EmailMessage::class);
    }


    /**
     *
     * get the structured IMAP settings
     *
     * @return array
     */
    public function getIMAPFormattedSettings(): array
    {
        return [
            'host' => $this->settings->imap_host,
            'port' => $this->settings->imap_port ?? 993,
            'protocol' => $this->settings->imap_protocol ?? 'imap', //might also use imap, [pop3 or nntp (untested)]
            'encryption' => $this->settings->imap_encryption ?? 'tls', // Supported: false, 'ssl', 'tls', 'notls', 'starttls'
            'validate_cert' => $this->settings->imap_validate_cert,
            'username' => $this->settings->imap_username,
            'password' => $this->settings->imap_password,
            'authentication' => $this->settings->imap_authentication ?? null,
        ];
    }

}
