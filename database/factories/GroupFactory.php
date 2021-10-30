<?php
use Faker\Generator as Faker;
use MilkMedia\GetContent\Group;
$factory->define(Group::class, function (Faker $faker) {
    return [
        'name' => $faker->word
    ];
});
