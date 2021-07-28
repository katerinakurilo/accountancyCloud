var gulp = require('gulp'),
  
   sass = require('gulp-sass'),
  
  
   browserSync = require('browser-sync').create();
  
   



  gulp.task('sass', function(){
    return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'));
})


function browsersync() {
	browserSync.init({ 
		server: { baseDir: 'build/' }, 
		notify: false, 
		online: true 
	});
    
}
exports.browsersync = browsersync;
