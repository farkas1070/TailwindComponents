<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\JobType;
use Illuminate\Support\Facades\DB; // Add this line


class JobTypeController extends Controller
{
    public function index()
    {
        $jobTypes = JobType::all();
        return response()->json($jobTypes);
    }
    public function getJobTypeCounts()
    {
        $jobTypeCounts = DB::table('job_types')
        ->select('typeID', DB::raw('count(*) as count'))
        ->groupBy('typeID')
        ->get();

        return response()->json(['jobTypeCounts' => $jobTypeCounts]);
    }
    
}
