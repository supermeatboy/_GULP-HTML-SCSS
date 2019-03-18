# OptimizedHTML - Start HTML Template

OptimizedHTML is all-inclusive, optimized for Google PageSpeed start HTML5 template with Bootstrap (grid only), Gulp, Sass, Browsersync, Autoprefixer, Clean-CSS, Uglify, Imagemin, Vinyl-FTP and Bower (libs path) support. The template contains a __.htaccess__ file with caching rules for web server.

OptimizedHTML Start Template uses the best practices of web development and optimized for Google PageSpeed.

Cross-browser compatibility: IE9+.

The template uses a Sass with __Sass__ syntax and project structure with source code in the directory __app/__ and production folder __dist/__, that contains ready project with optimized HTML, CSS, JS and images.

## How to use OptimizedHTML
1. [Download](http://google.com)
2. Install Node Modules: __npm i__;
3. Run the template: __gulp__.

## Gulp tasks:

* __gulp__: run default gulp task (sass, js, watch, browserSync) for web development;
* __build__: build project to __dist__ folder (cleanup, image optimize, removing unnecessary files);
* __deploy__: project deployment on the server from __dist__ folder via __FTP__;
* __rsync__: project deployment on the server from __dist__ folder via __RSYNC__;
* __clearcache__: clear all gulp cache.

## Rules for working with the starting HTML template

*	All HTML files should have similar initial content as in __app/index.html__;
*	__Template Basic Images Start__ comment in app/index.html - all your custom template basic images (og:image for social networking, favicons for a variety of devices);
*	__Custom Browsers Color Start__ comment in app/index.html: set the color of the browser head on a variety of devices;
*	__Custom HTML__ comment in app/index.html - all your custom HTML;
*	For installing new jQuery library, just run the command "__bower i plugin-name__" in the terminal. Libraries are automatically placed in the folder __app/libs__. Bower must be installed in the system (npm i -g bower). Then place all jQuery libraries paths in the __'libs'__ task (gulpfile.js);
*	All custom JS located in __app/js/main.js__;
*	All Sass vars placed in __app/sass/_vars.sass__;
*	All Bootstrap media queries placed in __app/sass/_media.sass__;
*	All jQuery libraries CSS styles placed in __app/sass/_libs.sass__;
*	Rename __ht.access__ to __.htaccess__ before place it in your web server. This file contain rules for files caching on web server.

