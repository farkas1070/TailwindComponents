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
        Schema::create('job_types', function (Blueprint $table) {
            $table->id('Job_TypeID');
            $table->unsignedBigInteger('JobID');
            $table->unsignedBigInteger('TypeID')->unique();
            $table->timestamps();

            $table->foreign('JobID')->references('JobID')->on('jobs')->onDelete('cascade');
            $table->foreign('TypeID') -> references('TypeID')->on('types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_types');
    }
};
