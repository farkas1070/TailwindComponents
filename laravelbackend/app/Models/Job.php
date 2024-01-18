<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;
    protected $primaryKey = 'JobID';

    public function company()
    {
        return $this->belongsTo(Company::class,'company_id', 'CompanyID');
    }

    public function types()
    {
        return $this->belongsToMany(Type::class, 'job_types', 'JobID', 'TypeID');
    }
}
