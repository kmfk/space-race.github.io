/**
 * Example to build a website from a bunch of Makdown files
 *
 * - Extracts front-matter from each markdown file, assigns it to file object
 * - Converts markdown to HTML
 * - Passes each file through a template (using hogan flavour of mustache) adding some extra site variables
 * - Outputs to a public directory
 *
 * In the template a simple global navigation is generated of the root files siblings.
 */

'use strict';

var gulp = require('gulp');
var ssg = require('gulp-ssg');
var rename = require('gulp-rename');
var data = require('gulp-data');
var matter = require('gray-matter');
var markdown = require('gulp-markdown');
var wrap = require('gulp-wrap');
var del = require('del');
var plumber = require('gulp-plumber');



gulp.task('clean', function(cb) {
    return del('mission-control/docs', cb);
});

gulp.task('build', ['clean'], function() {

    return gulp.src('src-docs/content/**/*.md')

        .pipe(plumber())

        // Extract YAML front-matter using gulp-data
        .pipe(data(function(file) {
            var m = matter(String(file.contents));
            file.contents = new Buffer(m.content);
            return m.data;
        }))

        // markdown -> HTML
        .pipe(markdown())

        // Rename to .html
        .pipe(rename({ extname: '.html' }))

        // Run through gulp-ssg
        .pipe(ssg())

        // Wrap file in template
        .pipe(wrap(
            { src: 'src-docs/templates/standard-doc.html' },
            {
                siteTitle: 'Mission Control'
            },
            { engine: 'hogan' }
        ))

        // Output to build directory
        .pipe(gulp.dest('mission-control/docs/'));
});

gulp.task('watch', function () {
    gulp.watch('src-docs/content/**/*.md', ['build'])
});
gulp.task('default', ['build']);