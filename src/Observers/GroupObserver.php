<?php
namespace MilkMedia\GetContent\Observers;
use MilkMedia\GetContent\Group;
class GroupObserver
{
    public function creating(Group $group)
    {
        if (!$group->slug) {
            $group->slug = str_slug($group->name);
        }
    }
}
