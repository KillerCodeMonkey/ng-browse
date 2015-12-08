var uglify = require('gulp-uglify'),
    gulp = require('gulp');

gulp.task('compress', function () {
    'use strict';
    return gulp.src('src/ng-browse.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['compress']);
