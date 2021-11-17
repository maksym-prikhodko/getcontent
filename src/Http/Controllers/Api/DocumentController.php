<?php
namespace MilkMedia\GetContent\Http\Controllers\Api;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use MilkMedia\GetContent\Document;
use MilkMedia\GetContent\Http\Controllers\Controller;
class DocumentController extends Controller
{
    public function index()
    {
        $documents = Document::all();
        return ['data' => $documents];
    }
    public function store(Request $request)
    {
        $valid = $request->validate([
            'name'     => 'required|string',
            'slug'     => 'string|nullable',
            'uuid'     => 'string|nullable|unique:documents,uuid',
            'content'  => 'array',
            'model'    => 'array',
            'group_id' => 'nullable|exists:groups,id',
        ]);
        $document = Document::create(array_merge($valid, ['owner_id' => Auth::id()]));
        return response()->json(['data' => $document], 201);
    }
    public function show(Document $document)
    {
        return ['data' => $document];
    }
    public function update(Request $request, Document $document)
    {
        $valid = $request->validate([
            'name'     => 'string',
            'content'  => 'array',
            'group_id' => 'nullable|exists:groups,id',
        ]);
        $document->update($valid);
        return ['data' => $document];
    }
    public function destroy(Document $document)
    {
        $document->delete();
    }
}
