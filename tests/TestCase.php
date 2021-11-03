<?php
namespace MilkMedia\GetContent\Test;
abstract class TestCase extends \Orchestra\Testbench\TestCase
{
    use TestCaseTrait;
    protected $user;
    protected function setUp()
    {
        parent::setUp();
        $this->initEnv();
        $this->user = TestUser::create([
            'name'     => 'Test User',
            'email'    => 'user@example.com',
            'password' => 'secret',
        ]);
    }
}
