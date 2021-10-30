<?php
namespace MilkMedia\GetContent;
use Illuminate\Database\Eloquent\Model;
use MilkMedia\GetContent\Traits\HasSchemalessContent;
use MilkMedia\GetContent\Traits\HasSchemalessModel;
class Document extends Model
{
    use HasSchemalessContent;
    use HasSchemalessModel;
    protected $guarded = [];
    public $casts = [
        'content' => 'array',
        'model' => 'array',
    ];
    public function owner()
    {
        return $this->belongsTo(config('getcontent.models.owner'), 'owner_id');
    }
    public function group()
    {
        return $this->belongsTo(Group::class);
    }
    public function documents()
    {
        return $this->belongsToMany(self::class, 'document_links', 'document_id', 'other_document_id');
    }
    public function linked($key)
    {
        if (!array_has($this->content, $key)) {
            return false;
        }
        return $this->documents->where('id', array_get($this->content, $key))->first();
    }
    public function scopeBySlug($query, $slug)
    {
        $query->where('slug', $slug);
        collect(explode('/', $slug))->each(function($segment) use ($query) {
            $query->orWhere('slug', $segment);
        });
        return $query;
    }
}
