<?php
use Faker\Generator as Faker;
use MilkMedia\GetContent\Document;
$factory->define(Document::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'content' => [
            'fields' => [
                [
                    'type' => 'heading',
                    'value' => $faker->sentence
                ],
                [
                    'type' => 'image',
                    'value' => $faker->imageUrl(),
                ],
                [
                    'type' => 'html',
                    'value' => "<p>{$faker->paragraph()}</p>",
                ]
            ]
        ]
    ];
});
