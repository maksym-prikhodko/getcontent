<?php
namespace MilkMedia\GetContent\Test;
use Illuminate\Support\Facades\Route;
use Kalnoy\Nestedset\NestedSetServiceProvider;
use MilkMedia\GetContent\GetContent;
use MilkMedia\GetContent\GetContentServiceProvider;
use Spatie\SchemalessAttributes\SchemalessAttributesServiceProvider;
trait TestCaseTrait
{
    protected function getPackageProviders($app)
    {
        return [
            GetContentServiceProvider::class,
            SchemalessAttributesServiceProvider::class,
            NestedSetServiceProvider::class,
        ];
    }
    protected function setUp()
    {
        parent::setUp();
        $this->initEnv();
    }
    public function initEnv()
    {
        Route::middleware(['middleware' => \Illuminate\Routing\Middleware\SubstituteBindings::class])
            ->prefix('api')
            ->group(function () {
                GetContent::routes();
            });
        GetContent::editorRoutes();
        $this->withFactories(__DIR__ . '/../database/factories');
        $this->artisan('migrate:fresh', [
            '--path' => ['migrations', __DIR__ . '../database/migrations'],
        ]);
        $this->artisan('migrate');
    }
}
