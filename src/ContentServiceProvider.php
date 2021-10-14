<?php
namespace MilkMedia\GetContent;
use Illuminate\Support\ServiceProvider;
class ContentServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(GetContent::class, function($app) {
            return new GetContent(config('getconfig'));
        });
    }
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__ . '/../migrations');
        $this->loadViewsFrom(__DIR__ . '/views', 'content');
    }
}
