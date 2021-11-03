<?php
namespace MilkMedia\GetContent;
use Illuminate\Support\Facades\Route;
class GetContent
{
    public function __construct($config)
    {
    }
    public static function routes()
    {
        Route::get('/documents', '\MilkMedia\GetContent\Http\Controllers\Api\DocumentController@index');
        Route::post('/documents', '\MilkMedia\GetContent\Http\Controllers\Api\DocumentController@store');
        Route::get('/documents/{document}', '\MilkMedia\GetContent\Http\Controllers\Api\DocumentController@show');
        Route::put('/documents/{document}', '\MilkMedia\GetContent\Http\Controllers\Api\DocumentController@update');
        Route::delete('/documents/{document}', '\MilkMedia\GetContent\Http\Controllers\Api\DocumentController@destroy');
        Route::get('/groups', '\MilkMedia\GetContent\Http\Controllers\Api\GroupController@index');
        Route::get('/groups/{group}', '\MilkMedia\GetContent\Http\Controllers\Api\GroupController@show');
        Route::post('/groups', '\MilkMedia\GetContent\Http\Controllers\Api\GroupController@store');
        Route::put('/groups/{group}', '\MilkMedia\GetContent\Http\Controllers\Api\GroupController@update');
        Route::delete('/groups/{group}', '\MilkMedia\GetContent\Http\Controllers\Api\GroupController@destroy');
        Route::get('/groups/{group}/documents',
            '\MilkMedia\GetContent\Http\Controllers\Api\GroupDocumentsController@index');
    }
    public static function editorRoutes()
    {
        Route::view('editor', 'getcontent::editor.index');
    }
}
