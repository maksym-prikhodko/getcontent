<?php
namespace MilkMedia\GetContent;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use MilkMedia\GetContent\Observers\DocumentObserver;
use MilkMedia\GetContent\Observers\GroupObserver;
class GetContentServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__ . '/../config/getcontent.php',
            'getcontent'
        );
        $this->app->singleton(GetContent::class, function ($app) {
            return new GetContent(config('getconfig'));
        });
    }
    public function boot()
    {
        $this->publishes([
            __DIR__ . '/../config/getcontent.php' => config_path('getcontent.php'),
        ]);
        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'getcontent');
        Document::observe(DocumentObserver::class);
        Group::observe(GroupObserver::class);
    }
}
