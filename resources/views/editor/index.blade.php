@extends('getcontent::layouts.default')
@push('styles')
    <link rel="stylesheet" href="{{asset('getcontent/app.css')}}">
@endpush
@push('scripts')
    <script>
        window.config = {
            api_token: "{{Auth::user()->api_token}}"
        }
    </script>
    <script src="{{asset('getcontent/app.js')}}"></script>
@endpush
@section('content')
    <div id="getcontent"></div>
@endsection
