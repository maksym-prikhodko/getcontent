<?php
namespace MilkMedia\GetContent\Observers;
use MilkMedia\GetContent\Document;
class DocumentObserver
{
    public function creating(Document $document)
    {
        if (!$document->slug) {
            $document->slug = str_slug($document->name);
        }
    }
}
