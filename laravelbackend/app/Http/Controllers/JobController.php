<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Job;

class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::all();
        return response()->json($jobs); 
    }

    public function searchByTitle(Request $request)
    {
        $query = $request -> input('query');

        $jobs = Job::where('job_title', 'like', '%' . $query . '%')-> get();

        return response()->json($jobs);
    }
}
