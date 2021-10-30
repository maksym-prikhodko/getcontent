<?php
namespace MilkMedia\GetContent\Http\Controllers\Api;
use MilkMedia\GetContent\Group;
use MilkMedia\GetContent\Http\Controllers\Controller;
class GroupDocumentsController extends Controller
{
    public function index(Group $group)
    {
        $documents = $group->documents;
        return ['data' => $documents];
    }
}
