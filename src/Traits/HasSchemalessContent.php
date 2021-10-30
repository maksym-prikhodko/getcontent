<?php
namespace MilkMedia\GetContent\Traits;
use Illuminate\Database\Eloquent\Builder;
use Spatie\SchemalessAttributes\SchemalessAttributes;
trait HasSchemalessContent
{
    public function getContentAttribute(): SchemalessAttributes
    {
        return SchemalessAttributes::createForModel($this, 'content');
    }
    public function scopeWithContent(): Builder
    {
        return SchemalessAttributes::scopeWithSchemalessAttributes('content');
    }
}
