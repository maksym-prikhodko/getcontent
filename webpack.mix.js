let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
mix
    .js('src/frontend/js/app.js', 'public/js')
    .sass('src/frontend/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.js')],
    })
    .sourceMaps();
