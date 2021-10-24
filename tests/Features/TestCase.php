<?php
abstract class TestCase extends Orchestra\Testbench\TestCase
{
    protected function getPackageProviders($app)
    {
        return [MilkMedia\GetContent\ContentServiceProvider::class];
    }
    protected function setUp()
    {
        parent::setUp();
        $this->artisan('migrate');
    }
    protected function getEnvironmentSetUp($app)
    {
        Schema::dropIfExists('getcontent-textbench');
        $app['config']->set('database.default', 'testbench');
    }
}
