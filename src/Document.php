<?php
namespace MilkMedia\GetContent;
use Illuminate\Database\Eloquent\Model;
use MilkMedia\GetContent\Traits\HasSchemalessFields;
use MilkMedia\GetContent\Traits\HasSchemalessModel;
class Document extends Model
{
    use HasSchemalessFields;
    use HasSchemalessModel;
    public $casts = [
        'fields' => 'array',
        'model' => 'array',
    ];
}
