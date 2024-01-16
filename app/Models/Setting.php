<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
      'imap_validate_cert' => 'boolean',
      'imap_port' => 'int',
    ];


}
