<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Catalog');
});

Route::get('/catalog', function () {
    return Inertia::render('Catalog');
});