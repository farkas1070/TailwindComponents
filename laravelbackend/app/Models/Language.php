<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;
    protected $primaryKey = 'LanguageID';
    public function jobs()
    {
        return $this->belongsToMany(Job::class,'job_languages', 'LanguageID', 'JobID');
    }
}
