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
        Route::namespace('MilkMedia\GetContent\Http\Controllers\Api')
            ->middleware(['middleware' => \Illuminate\Routing\Middleware\SubstituteBindings::class])
            ->prefix('api')->group(function () {
                Route::get('/documents', 'DocumentController@index');
                Route::post('/documents', 'DocumentController@store');
                Route::get('/documents/{document}', 'DocumentController@show');
                Route::put('/documents/{document}', 'DocumentController@update');
                Route::delete('/documents/{document}', 'DocumentController@destroy');
                Route::get('/groups', 'GroupController@index');
                Route::get('/groups/{group}', 'GroupController@show');
                Route::post('/groups', 'GroupController@store');
                Route::put('/groups/{group}', 'GroupController@update');
                Route::delete('/groups/{group}', 'GroupController@destroy');
                Route::get('/groups/{group}/documents', 'GroupDocumentsController@index');
            });
    }
}
