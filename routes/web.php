<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('HomeScreen');
});
Route::get('/aboutus', function () {
    return Inertia::render('AboutUsScreen');
});
Route::get('/gallery', function () {
    return Inertia::render('GalleryScreen');
});
Route::get('/packages', function () {
    return Inertia::render('PackagesScreen');
});
Route::get('/carhire', function () {
    return Inertia::render('CarHireScreen');
});
Route::get('/airportpickup', function () {
    return Inertia::render('AirportPickUpScreen');
});
Route::get('/bookpackage', function () {
    return Inertia::render('BookPackageScreen');
});
Route::get('/hotelbooking', function () {
    return Inertia::render('HotelBookingScreen');
});
Route::get('/customtour', function () {
    return Inertia::render('CustomTourScreen');
});