<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Job;
use Illuminate\Support\Facades\DB; // Add this line

class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::with('company')->take(10)->get();

        return response()->json($jobs);
    }

    public function searchByTitle(Request $request)
    {
        $query = $request -> input('query');

        $jobs = Job::where('job_title', 'like', '%' . $query . '%')-> get();

        return response()->json($jobs);
    }
    public function getJobTypes($jobID)
    {
        $job = Job::with('types')->find($jobID);
        if(!$job) {
            return response()->json(['message' => 'Job not found'], 404);
        }
        $types = $job->types->pluck('name');
        return response()->json($types);
    }
    
    
}
