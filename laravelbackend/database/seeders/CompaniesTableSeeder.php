<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB; // Add this line

class CompaniesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        foreach (range(1, 20) as $index) {
            // Adjust the fields and data generation based on your database schema
            DB::table('companies')->insert([
                'name' => $faker->company,
                'website_link' => $faker->url,
                'company_logo' => $faker->imageUrl,
                'rating' => $faker->randomFloat(2, 1, 5),
                // Add other fields as needed
            ]);
        }
    }
}
