<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB; // Add this line

class TypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $types = ['IT', 'Development', 'Software Engineering', 'Advertising','Acting','Banking & Finance', 'Business', 'Childcare', 'Business Management','Carpentry','Education','Beauty Industry', 'Ecommerce', 'Engineering', 'Programming', 'Research', 'Pharmacy', 'Forestry','Law','Human Resources','Medicine','Doctoring'];

        foreach ($types as $type) {
            DB::table('types')->insert([
                'name' => $type,
            ]);
        }
    }
}
