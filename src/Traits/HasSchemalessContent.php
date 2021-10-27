<?php
namespace MilkMedia\GetContent\Traits;
use Illuminate\Database\Eloquent\Builder;
use Spatie\SchemalessAttributes\SchemalessAttributes;
trait HasSchemalessFields
{
    public function getFieldsAttribute(): SchemalessAttributes
    {
        return SchemalessAttributes::createForModel($this, 'fields');
    }
    public function scopeWithFields(): Builder
    {
        return SchemalessAttributes::scopeWithSchemalessAttributes('fields');
    }
}
