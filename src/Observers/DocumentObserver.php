<?php
namespace MilkMedia\GetContent\Observers;
use Illuminate\Support\Str;
use MilkMedia\GetContent\Document;
class DocumentObserver
{
    public function creating(Document $document)
    {
        if (!$document->slug) {
            $document->slug = str_slug($document->name);
        }
        if (!$document->uuid) {
            $document->uuid = (string) Str::uuid();
        }
    }
}
