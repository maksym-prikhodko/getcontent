@extends('getcontent::layouts.default')
@push('scripts')
    <script src="{{asset('milkmedia/getcontent/app.js')}}"></script>
@endpush
@section('content')
    <getcontent></getcontent>
@endsection
