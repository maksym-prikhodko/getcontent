<?php
namespace MilkMedia\GetContent\Test\Browser;
use MilkMedia\GetContent\Test\BrowserTestCase;
class EditorTest extends BrowserTestCase {
    public function it_shows_documents()
    {
        $this->browse(function ($browser) {
            $browser->visit('/editor')
                ->assertPresent('.document');
        });
    }
}
