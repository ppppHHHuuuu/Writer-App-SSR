var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', async () => {
     return gulp.src('./src/public/css/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/public/css'))
})

gulp.task('watch', async () => {
    gulp.watch('./src/public/css/scss/*.scss').on('change', gulp.series('sass'));
})

gulp.task('default', gulp.series(['sass', 'watch']));