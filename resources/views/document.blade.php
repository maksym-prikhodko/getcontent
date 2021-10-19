<h1>{{$document->name}}</h1>
<dl>
@foreach($document->fields as $field)
    <dd>{{$field}}</dd>
@endforeach
</dl>
