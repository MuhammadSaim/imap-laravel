<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EmailMessage extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     *
     * back relation with folder
     *
     * @return BelongsTo
     */
    public function folder(): BelongsTo
    {
        return $this->belongsTo(Folder::class);
    }

    /**
     *
     * add attachment relationship with messages
     *
     * @return HasMany
     */
    public function attachments(): HasMany
    {
        return $this->hasMany(EmailAttachment::class);
    }

}
