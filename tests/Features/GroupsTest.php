<?php
namespace MilkMedia\GetContent\Test\Features;
use MilkMedia\GetContent\Document;
use MilkMedia\GetContent\Group;
use MilkMedia\GetContent\Test\TestCase;
class GroupsTest extends TestCase
{
    public function user_can_create_a_group()
    {
        $this->withoutExceptionHandling()->actingAs($this->user)->post('api/groups', [
            'name' => 'Pages',
            'model' => [
                'fields' => [
                    'content' => 'content'
                ],
            ],
        ])->assertStatus(201)->json();
        $this->assertDatabaseHas('groups', [
            'id' => 1,
            'name' => 'Pages',
        ]);
    }
    public function user_can_update_group()
    {
        factory(Group::class)->create(['name' => 'Pages']);
        $this->actingAs($this->user)->put('api/groups/1', ['name' => 'Podcasts'])
            ->assertStatus(200)
            ->json();
        $this->assertDatabaseHas('groups', ['id' => 1, 'name' => 'Podcasts']);
    }
    public function user_can_delete_group()
    {
        factory(Group::class)->create();
        $this->actingAs($this->user)->delete('api/groups/1')
            ->assertStatus(200);
        $this->assertDatabaseMissing('groups', ['id' => 1]);
    }
    public function user_can_list_groups()
    {
        factory(Group::class, 5)->create();
        $response = $this->actingAs($this->user)->get('api/groups')
            ->assertStatus(200)
            ->assertJsonStructure(['data' => [[
                'id',
                'name',
                'parent_id',
            ]]])
            ->json();
        $this->assertCount(5, $response['data']);
    }
    public function user_can_get_a_group()
    {
        factory(Group::class)->create();
        $this->actingAs($this->user)->get('api/groups/1')
            ->assertStatus(200)
            ->assertJsonStructure(['data' => [
                'id',
                'name',
                'parent_id',
                'schema',
            ]]);
    }
    public function group_returns_children()
    {
        factory(Group::class)->create();
        factory(Group::class)->create(['parent_id' => 1, 'name' => 'Child Group']);
        factory(Document::class, 2)->create(['owner_id' => 1, 'group_id' => 1]);
        $response = $this->actingAs($this->user)->withoutExceptionHandling()->get('api/groups/1?withChildren')
            ->assertStatus(200)
            ->assertJsonStructure(['data' => [
                'id',
                'name',
                'parent_id',
                'schema',
                'groups' => [[
                    'id',
                    'name',
                    'parent_id',
                ]],
                'documents' => [[
                    'id',
                    'name',
                    'slug',
                ]],
            ]])
            ->assertJsonFragment(['name' => 'Child Group'])
            ->json();
        $this->assertCount(1, $response['data']['groups']);
        $this->assertCount(2, $response['data']['documents']);
    }
}
