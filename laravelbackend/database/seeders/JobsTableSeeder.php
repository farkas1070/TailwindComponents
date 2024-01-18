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
        $faker = Faker::create();

        foreach (range(1, 90) as $index) {
            $company_id = rand(1, 10); // Assuming you have 10 companies seeded

            $jobId = DB::table('jobs')->insertGetId([
                'company_id' => $company_id,
                'start_salary' => $faker->randomFloat(2, 1000, 5000),
                'end_salary' => $faker->randomFloat(2, 5000, 10000),
                'post_date' => $faker->date,
                'job_title' => $faker->jobTitle,
                'job_short_description' => $faker->sentence,
                'job_type' => $faker->word,
                'job_place' => $faker->city,
                'job_long_description' => $faker->paragraph,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
             // Insert job types into 'job_types' table
         $typeIds = range(6, 22); // Assuming you have 5 types seeded
         shuffle($typeIds);
         $selectedTypeIds = array_slice($typeIds, 0, rand(1, 4)); // Randomly select 1 to 3 types

         foreach ($selectedTypeIds as $typeId) {
             DB::table('job_types')->insert([
                 'JobID' => $jobId,
                 'TypeID' => $typeId,
                 'created_at' => now(),
                 'updated_at' => now(),
             ]);
         }
        }
    }
}
