<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class EmailAccount extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    protected $casts = [
      'is_default' => 'boolean',
      'imap_validate_cert' => 'boolean',
    ];

    /**
     *
     * make a one-to-many relation with folders
     *
     * @return HasMany
     */
    public function folders(): HasMany
    {
        return $this->hasMany(Folder::class);
    }


    /**
     *
     * make a one-to-many relation with messages
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
