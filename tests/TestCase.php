<?php
namespace MilkMedia\GetContent\Test;
use Kalnoy\Nestedset\NestedSetServiceProvider;
use MilkMedia\GetContent\ContentServiceProvider;
use MilkMedia\GetContent\GetContent;
use Spatie\SchemalessAttributes\SchemalessAttributesServiceProvider;
abstract class TestCase extends \Orchestra\Testbench\TestCase
{
    protected $user;
    protected function getPackageProviders($app)
    {
        return [
            ContentServiceProvider::class,
            SchemalessAttributesServiceProvider::class,
            NestedSetServiceProvider::class,
        ];
    }
    protected function setUp()
    {
        parent::setUp();
        GetContent::routes();
        $this->withFactories(__DIR__.'/../database/factories');
        $this->artisan('migrate:fresh', [
            '--path' => ['migrations', __DIR__ . '../database/migrations']
        ]);
        $this->artisan('migrate');
        $this->user = TestUser::create([
            'name'     => 'Test User',
            'email'    => 'user@example.com',
            'password' => 'secret',
        ]);
    }
}
