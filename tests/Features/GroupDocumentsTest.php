<?php
namespace MilkMedia\GetContent\Test\Features;
use MilkMedia\GetContent\Document;
use MilkMedia\GetContent\Group;
use MilkMedia\GetContent\Test\TestCase;
class GroupDocumentsTest extends TestCase
{
    public function get_documents_by_group()
    {
        factory(Group::class, 2)->create();
        factory(Document::class, 2)->create(['owner_id' => 1, 'group_id' => 1]);
        factory(Document::class, 2)->create(['owner_id' => 1, 'group_id' => 2]);
        $response = $this->actingAs($this->user)->withoutExceptionHandling()->get('api/groups/1/documents')
            ->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    [
                        'id',
                        'name',
                        'slug',
                        'group_id',
                        'created_at',
                        'updated_at',
                    ],
                ],
            ])
            ->json();
        $this->assertCount(2, $response['data']);
    }
}
