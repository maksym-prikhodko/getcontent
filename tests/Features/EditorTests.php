<?php
namespace MilkMedia\GetContent\Test\Features;
use MilkMedia\GetContent\Test\TestCase;
class EditorTests extends TestCase
{
    public function shows_editor_view()
    {
        $this->get('/editor')
            ->assertStatus(200)
            ->assertSee('<getcontent></getcontent>');
    }
}
