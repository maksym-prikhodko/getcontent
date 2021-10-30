<?php
use MilkMedia\GetContent\GetContent;
Route::middleware('auth:api')->group(function () {
    GetContent::routes();
});
