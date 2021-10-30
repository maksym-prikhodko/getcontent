<?php
namespace MilkMedia\GetContent\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
class GroupResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'        => $this->id,
            'parent_id' => $this->parent_id,
            'name'      => $this->name,
            'schema'    => $this->schema,
            $this->mergeWhen($request->exists('withChildren'), function () {
                return [
                    'groups'    => GroupResource::collection($this->children),
                    'documents' => DocumentResource::collection($this->documents),
                ];
            }),
        ];
    }
}
