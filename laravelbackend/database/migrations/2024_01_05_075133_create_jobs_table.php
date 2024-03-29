<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id('JobID');
            $table->unsignedBigInteger('company_id');
            $table->decimal('start_salary', 10, 2);
            $table->decimal('end_salary', 10, 2);
            $table->date('post_date');
            $table->string('job_title');
            $table->text('job_short_description');
            $table->string('job_type');
            $table->string('job_place');
            $table->text('job_long_description');
            $table->timestamps();
    
            $table->foreign('company_id')->references('CompanyID')->on('companies')->onDelete('cascade');
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
