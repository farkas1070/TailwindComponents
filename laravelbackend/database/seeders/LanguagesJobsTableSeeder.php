<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LanguagesJobsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Get all job and language IDs
         $jobIds = DB::table('jobs')->pluck('JobID');
         $languageIds = DB::table('languages')->pluck('LanguageID');
 
         // Seed languages_jobs table with random associations
         foreach ($jobIds as $jobId) {
             // Randomly choose 1 or 3 language IDs for each job
             $randomLanguageIds = $this->getRandomLanguageIds($languageIds);
 
             // Insert records into languages_jobs table
             foreach ($randomLanguageIds as $languageId) {
                 DB::table('job_languages')->insert([
                     'JobID' => $jobId,
                     'LanguageID' => $languageId,
                 ]);
             }
         }
    }
    private function getRandomLanguageIds($languageIds)
    {
        // Randomly choose 1 or 3 language IDs
        $numberOfLanguages = rand(1, 3);
        return $languageIds->random($numberOfLanguages)->all();
    }
}
