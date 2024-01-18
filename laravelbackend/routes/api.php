<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\JobTypeController;
use App\Http\Controllers\TypeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/jobs', [JobController::class, 'index']);
Route::get('/companies', [CompanyController::class, 'index']);
Route::get('/jobtypes', [JobTypeController::class, 'index']);
Route::get('/types', [TypeController::class, 'index']);
Route::get('/companies/{companyId}', [CompanyController::class, 'getCompanyDataById']);

Route::get('/jobs/search', [JobController::class, 'searchByTitle']);
Route::get('jobscategorienum',[JobTypeController::class, 'getJobTypeCounts']);
Route::get('/job/{jobID}/types',[JobController::class, 'getJobTypes']);

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);

    // Other routes...

