<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LanguagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Sample data for languages
        $languages = [
            ['name' => 'English'],
            ['name' => 'German'],
            ['name' => 'Hungarian'],
            // Add more languages as needed
        ];

        // Insert data into the 'languages' table
        DB::table('languages')->insert($languages);
    }
}
