<?php
namespace MilkMedia\GetContent\Http\Controllers;
use Illuminate\Http\Response;
class EditorAssetsController extends Controller {
    public function js()
    {
        $content = file_get_contents(__DIR__ . '../../../../public/js/app.js');
        $response = new Response(
            $content, 200, [
                'Content-Type' => 'text/javascript',
            ]
        );
        return $this->cacheResponse($response);
    }
    public function css()
    {
        $content = file_get_contents(__DIR__ . '../../../../public/css/app.css');
        $response = new Response(
            $content, 200, [
                'Content-Type' => 'text/css',
            ]
        );
        return $this->cacheResponse($response);
    }
    protected function cacheResponse(Response $response)
    {
        return $response;
    }
}
