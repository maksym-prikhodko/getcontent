<?php
namespace MilkMedia\GetContent;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;
use Spatie\Activitylog\Traits\LogsActivity;
class Group extends Model
{
    use NodeTrait;
    protected $guarded = [];
    protected $casts =[
        'model' => 'array'
    ];
    public function documents()
    {
        return $this->hasMany(Document::class);
    }
}
