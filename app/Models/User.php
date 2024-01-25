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
     * make relation with accounts which user's added
     *
     * @return HasOne
     */
    public function accounts(): HasOne
    {
        return $this->hasOne(EmailAccount::class);
    }


    public function hasDefaultAccount(): bool
    {
        return $this->accounts()->where('is_default', true)->get()->count() >= 1;
    }


    /**
     *
     * get the structured IMAP settings
     *
     * @return array
     */
    public function getIMAPFormattedSettings(): array
    {
        if(!$this->hasDefaultAccount()){
            return [];
        }
        $account = $this->accounts()->where('is_default', true)->first();
        return [
            'host' => $account->imap_host,
            'port' => $account->imap_port ?? 993,
            'protocol' => $account->imap_protocol ?? 'imap', //might also use imap, [pop3 or nntp (untested)]
            'encryption' => $account->imap_encryption ?? 'tls', // Supported: false, 'ssl', 'tls', 'notls', 'starttls'
            'validate_cert' => $account->imap_validate_cert,
            'username' => $account->imap_username,
            'password' => $account->imap_password,
            'authentication' => $account->imap_authentication ?? null,
        ];
    }

}
