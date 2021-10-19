<?php
namespace MilkMedia\GetContent\Traits;
use Illuminate\Database\Eloquent\Builder;
use Spatie\SchemalessAttributes\SchemalessAttributes;
trait HasSchemalessModel
{
    public function getModelAttribute(): SchemalessAttributes
    {
        return SchemalessAttributes::createForModel($this, 'model');
    }
    public function scopeWithModel(): Builder
    {
        return SchemalessAttributes::scopeWithSchemalessAttributes('model');
    }
}
