<?php
namespace Tests\Feature;
use App\Document;
use App\Group;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
class GroupDocumentsTest extends TestCase
{
    use RefreshDatabase;
    public function get_documents_by_group()
    {
        factory(Group::class, 2)->create();
        factory(Document::class, 2)->create(['user_id' => 1, 'group_id' => 1]);
        factory(Document::class, 2)->create(['user_id' => 1, 'group_id' => 2]);
        $response = $this->actingAs($this->user)->get('api/groups/1/documents')
            ->assertStatus(200)
            ->assertJsonStructure(['data' => [[
                'id',
                'name',
                'slug',
                'group_id',
                'created_at',
                'updated_at',
            ]]
            ])
            ->json();
        $this->assertCount(2, $response['data']);
    }
}
