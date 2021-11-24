<?php
namespace MilkMedia\GetContent\Http\Controllers\Api;
use Illuminate\Http\Request;
use MilkMedia\GetContent\Group;
use MilkMedia\GetContent\Http\Controllers\Controller;
use MilkMedia\GetContent\Http\Resources\GroupResource;
class GroupController extends Controller
{
    public function index()
    {
        $groups = Group::all();
        return ['data' => $groups];
    }
    public function store(Request $request)
    {
        $valid = $request->validate([
            'name'      => 'required|string',
            'parent_id' => 'numeric|exists:groups,id|nullable',
            'schema'    => 'array',
        ]);
        $group = Group::create($valid);
        return response()->json(['data' => $group], 201);
    }
    public function show(Group $group)
    {
        return new GroupResource($group);
    }
    public function update(Request $request, Group $group)
    {
        $valid = $request->validate([
            'name'      => 'required|string',
            'parent_id' => 'numeric|exists:groups|nullable',
            'schema'    => 'array',
        ]);
        $group->update($valid);
        return ['data' => $group];
    }
    public function destroy(Group $group)
    {
        $group->delete();
    }
}
