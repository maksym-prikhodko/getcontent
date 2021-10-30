<?php
namespace MilkMedia\GetContent\Test;
use Illuminate\Foundation\Auth\User as Authenticatable;
class TestUser extends Authenticatable
{
    protected $table = 'users';
    protected $guarded = [];
}
