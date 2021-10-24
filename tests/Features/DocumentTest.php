<?php
namespace Tests\Feature;
use App\Document;
use App\Group;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
class DocumentTest extends TestCase
{
    use RefreshDatabase;
    public function user_can_create_document()
    {
        $this->actingAs($this->user)->post('api/documents', [
            'name' => 'Hello World',
            'content' => ['fields' => [
                [
                    'type' => 'text',
                    'value' => 'Hello World!'
                ]
            ]]
        ])->assertStatus(201);
        $document = Document::whereRaw("content->'fields'->0->>'value' = 'Hello World!'")->first();
        $this->assertEquals(1, $document->id);
    }
    public function user_can_list_documents()
    {
        factory(Document::class, 5)->create([
            'user_id' => $this->user->id
        ]);
        $response = $this->actingAs($this->user)->get('api/documents')
            ->assertStatus(200)
            ->assertJsonStructure([
                'data' => [[
                    'id',
                    'name',
                    'created_at',
                    'updated_at',
                ]]
            ])
            ->json();
        $this->assertCount(5, $response['data']);
    }
    public function user_can_get_a_single_document()
    {
        factory(Document::class, 5)->create([
            'user_id' => $this->user->id
        ]);
        $this->actingAs($this->user)->get('api/documents/1')
            ->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name',
                    'description',
                    'schema',
                    'published_at',
                    'created_at',
                    'updated_at',
                ]
            ]);
    }
    public function user_can_update_a_document()
    {
        factory(Document::class)->create([
            'user_id' => $this->user->id,
            'content' => ['fields' => [['type' => 'text', 'value' => 'Hello World!']]],
        ]);
        $this->actingAs($this->user)->put('api/documents/1', [
            'content' => ['fields' => [['type' => 'image', 'value' => 'https:
        ])->assertStatus(200);
        $document = Document::whereRaw("content->'fields'->0->>'type' = 'image'")
            ->whereRaw("content->'fields'->0->>'value' = 'https:
            ->first();
        $this->assertEquals(1, $document->id);
    }
    public function user_can_delete_document()
    {
        factory(Document::class)->create([
            'user_id' => $this->user->id,
        ]);
        $this->actingAs($this->user)->delete('api/documents/1')
            ->assertStatus(200);
        $this->assertDatabaseMissing('documents', ['id' => 1]);
    }
    public function document_can_be_added_to_group()
    {
        factory(Group::class)->create();
        $this->actingAs($this->user)->post('api/documents', [
            'name' => 'New Page',
            'group_id' => 1,
            'content' => ['content' => 'test'],
        ])->assertStatus(201);
        $this->assertDatabaseHas('documents', ['id' => 1, 'group_id' => 1]);
    }
    public function cant_add_document_to_non_existent_group()
    {
        $this->actingAs($this->user)->post('api/documents', [
            'name' => 'New Page',
            'group_id' => 1,
            'content' => ['content' => 'test'],
        ])->assertStatus(302);
        $this->assertDatabaseMissing('documents', ['id' => 1, 'group_id' => 1]);
    }
    public function user_can_move_document_group()
    {
        factory(Group::class, 2)->create();
        factory(Document::class)->create([
            'user_id' => $this->user->id,
            'group_id' => 1,
        ]);
        $this->actingAs($this->user)->put('api/documents/1', [
            'group_id' => 2
        ])->assertStatus(200);
        $this->assertDatabaseHas('documents', ['id' => 1, 'group_id' => 2]);
    }
    public function cannot_move_document_to_non_existent_group()
    {
        factory(Group::class)->create();
        factory(Document::class)->create([
            'user_id' => $this->user->id,
            'group_id' => 1,
        ]);
        $this->actingAs($this->user)->put('api/documents/1', [
            'group_id' => 2
        ])->assertStatus(302);
        $this->assertDatabaseHas('documents', ['id' => 1, 'group_id' => 1]);
    }
}
