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

}
