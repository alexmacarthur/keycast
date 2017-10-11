const mix = require('laravel-mix');
const BabiliPlugin = require('babili-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Custom Webpack Config
 |--------------------------------------------------------------------------
 */

mix.webpackConfig({
  plugins: [new BabiliPlugin()]
});

/*
 |--------------------------------------------------------------------------
 | Custom Mix Options
 |--------------------------------------------------------------------------
 */

mix.options({
  processCssUrls: false,
  uglify: false
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 */

mix
  .sass('assets/scss/style.scss', 'assets/css')
  .js('assets/js/script.js', 'assets/js/script.min.js')
  .copy('assets/js/script.min.js', '_includes/script-main.js')
  .browserSync({
    server: {
      baseDir: "_site",
      index: "index.html"
    },
    proxy: false,
    files: [
      'assets/css/*.css',
      'assets/js/*.js',
    ]
  });
