<?php
namespace MilkMedia\GetContent\Observers;
use Illuminate\Support\Str;
use MilkMedia\GetContent\Group;
class GroupObserver
{
    public function creating(Group $group)
    {
        if (!$group->slug) {
            $group->slug = str_slug($group->name);
        }
        if (!$group->uuid) {
            $group->uuid = (string) Str::uuid();
        }
    }
}
