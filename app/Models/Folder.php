<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Folder extends Model
{

    protected $guarded = [];


    /**
     *
     * self relation with sub folders
     *
     * @return HasMany
     */
    public function sub_folders(): HasMany
    {
        return $this->hasMany(Folder::class);
    }

}
