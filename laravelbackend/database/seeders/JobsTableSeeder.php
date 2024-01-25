<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class JobsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jobIds = DB::table('jobs')->pluck('JobID');

    $jobtypes = ['IT', 'Finance', 'Education'];
    $Itjobtitles = ['Software developer', 'Application developer', 'Junior Frontend developer', 'Senior Backend Developer'];
    $Financejobtitles = ['Banker', 'Financial Advisor', 'Banker assistant','Fundraiser','Sales Manager','Finance Manager'];
    $educationjobtitles = ['History Teacher', 'Chemistry Teacher', 'German Teacher','School Janitor','PT Trainer'];
    $countries = ['Hungary', 'Germany', 'Austria'];
    $remote = [true,false];

    foreach ($jobIds as $jobId) {
        $randomJobType = $jobtypes[array_rand($jobtypes)];
        
        // Choose the job title array based on the job type
        $jobTitles = [];
        switch ($randomJobType) {
            case 'IT':
                $jobTitles = $Itjobtitles;
                break;
            case 'Finance':
                $jobTitles = $Financejobtitles;
                break;
            case 'Education':
                $jobTitles = $educationjobtitles;
                break;
            // Add more cases as needed

            default:
                break;
        }

        $randomJobTitle = $jobTitles[array_rand($jobTitles)];

        // Update the job_type and job_title columns in the jobs table
        DB::table('jobs')
            ->where('JobID', $jobId)
            ->update([
                'job_type' => $randomJobType,
                'job_title' => $randomJobTitle,
                'job_country' => $countries[array_rand($countries)],
                'remote' => array_rand($remote)
            ]);
    }
    }   
    
}
