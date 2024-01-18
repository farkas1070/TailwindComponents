<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{
    public function index()
    {
        $companies = Company::all();
        return response()->json($companies);
    }

    public function getCompanyDataById($companyID)
    {
        $company = Company::find($companyID);

        if(!$company) {
            return response()->json(['message' => 'Company not found'], 404);
        }
        return response()->json($company);
    }
}
