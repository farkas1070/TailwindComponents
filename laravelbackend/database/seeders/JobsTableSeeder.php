<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Open the insert block for the loop
        for ($i = 1; $i <= 10; $i++) {
            DB::table('jobs')->insert([
                'company' => "Company $i",
                'start_salary' => rand(50000, 80000),
                'end_salary' => rand(80000, 120000),
                'post_date' => now()->subDays($i),
                'job_title' => "Job Title $i",
                'job_short_description' => 'Software Developer needed',
                'job_type' => 'Full Time',
                'job_place' => 'Wien, Austria',
                'company_website_link' => 'www.microsoft.com',
                'job_long_description' => 'Software Developer needed Software Developer needed Software Developer needed Software Developer needed',
                'company_logo_url' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png'
            ]);
        }
    }
}
