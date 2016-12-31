////////////////////////////////////////////
// module
////////////////////////////////////////////

var gulp = require('gulp');
var fileInclude = require('gulp-file-include'); // HTMLファイル(PHPファイル)内にjsやcssなどを出力できる
var browserify = require('browserify'); // フロントでrequireを使用可能に & 依存関係解消
var uglify = require('gulp-uglify'); // minify
var watchify = require('watchify'); // 差分更新
var source = require('vinyl-source-stream'); // browserifyで必要
var buffer = require('vinyl-buffer');  // browserifyで必要
var sass = require('gulp-sass'); // node-sass
var plumber = require('gulp-plumber'); // エラーが起きても止めない
var autoprefixer = require('gulp-autoprefixer'); // ベンダープレフィックス自動付加
var browser = require("browser-sync").create(); // ブラウザ更新
var runSequence = require('run-sequence'); // 並列/直列処理

////////////////////////////////////////////
// path
////////////////////////////////////////////

var paths = {
  src: './src',
  src_assets: './src/assets',
  src_img: './src/assets/img',
  src_js: './src/assets/js',
  src_css: './src/assets/scss',
  dist: '../docs',
  dist_assets: '../docs/assets',
  dist_img: '../docs/assets/img',
  dist_js: '../docs/assets/js',
  dist_css: '../docs/assets/css',
  files_js: ['top.js','detail.js'], // browserifyを使いたいファイル
}

////////////////////////////////////////////
// task
////////////////////////////////////////////

// fileInclude
function inc(){
  return gulp.src(paths.src + '/**/*.html')
  .pipe(plumber())
  .pipe(fileInclude())
  .pipe(gulp.dest(paths.dist))
  .pipe(browser.reload({stream:true}));
}

gulp.task('inc',function(){
  return inc();
})


// sass
gulp.task("sass",function(){
  return gulp.src(paths.src_css + '/**/!(_)*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.dist_css))
    .pipe(browser.reload({stream:true}))
});


// img
gulp.task('img', function() {
  return gulp.src(paths.src_img + '/**/*')
  .pipe(gulp.dest(paths.dist_img))
  .pipe(browser.reload({stream:true}));
});


// browserify
gulp.task( 'browserify', function(callback) {
    return bundleJs( false , callback);
});

gulp.task( 'watchify', function(callback) {
    return bundleJs( true , callback);
});


function bundleJs(is_watch,callback){

   var wait_max   = paths.files_js.length; // browserifyで使用するjsの数
   var wait_count = 0;

    paths.files_js.forEach(function(entryPoint){
      if(is_watch){
        var bundler = watchify(
          browserify({
            cache: {},
            entries: [paths.src_js + '/' + entryPoint],
            debug: true,
            packageCache: {}
          })
        );
      }else{
        var bundler = browserify({
            cache: {},
            entries: [paths.src_js + '/' + entryPoint],
            debug: true,
            packageCache: {}
          });
      }

      function bundled(){
        return bundler
          .bundle()
          .pipe(plumber())
          .pipe(source(entryPoint))
          .pipe(buffer())
          .pipe(uglify({preserveComments: 'some'}))
          .pipe(gulp.dest(paths.dist_js))
          .on('end', function() {
            onEnd();
          });
      }
      function onEnd(){
        if(wait_max === ++wait_count){
          callback();
        }
      }

//      bundler.on('update',bundled);
      bundler.on('log',function(message){console.log(message)});
      return bundled();
    });

}



////////////////////////////////////////////
// watch
////////////////////////////////////////////


// browserify
gulp.task('js', ['browserify'], function() {
  inc();
});


gulp.task('css', function(callback) {
  return runSequence(
    ['sass'],
    'inc',
    callback
  );
});


gulp.task('default', function(callback) {
    browser.init({
      open: 'external',
      notify: false,
      host: 'localhost',
      ghostMode: false,
      server: [paths.dist]
    });
    gulp.watch( paths.src + '/**/*.html', ['inc'] );
    gulp.watch( paths.src_js + '/**/*.js', ['js'] );
    gulp.watch( paths.src_css + '/**/!(_)*.scss', ['css']);
    gulp.watch( paths.src_img + '/**/*', ['img']);
});

