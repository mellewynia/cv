'use strict';

import config from './gulpfile.config';

import gulp from 'gulp';

import clean from 'gulp-clean';
import watch from 'gulp-watch';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';

// Find arguments: --production, --build

process.env.PRODUCTION = process.argv.indexOf('--production') > -1 ? 'true' : 'false';
process.env.DEST = process.env.PRODUCTION === 'true' ? `./${config.paths.build}` : `./${config.paths.test}`;
process.env.BUILD = process.argv.indexOf('--build') > -1 ? 'true' : 'false';
// Care: process.env properties are always stored as strings with toString()..!

//
//
// Import tasks
//
//

import taskBrowserSync from './tasks/browser-sync';
gulp.task('browser-sync', taskBrowserSync);

import taskClean from './tasks/clean';
gulp.task('clean', taskClean);

import taskPug from './tasks/pug';
gulp.task('pug', taskPug);

import taskStyles from './tasks/styles';
gulp.task('styles', taskStyles);

import taskFonts from './tasks/fonts';
gulp.task('fonts', taskFonts);

import taskIcons from './tasks/icons';
gulp.task('icons', taskIcons);

import taskImages from './tasks/images';
gulp.task('images', taskImages);

import taskFavicons from './tasks/favicons';
gulp.task('favicons', taskFavicons);

import taskMedia from './tasks/media';
gulp.task('media', taskMedia);

import taskJS from './tasks/js';
gulp.task('js', taskJS);

//
//
// Watch
//
//

gulp.task('watch', () => {
    watch([ `${config.paths.source}/favicon-template-1024x1024.png` ], () => gulp.start('favicons') );
    watch([ `${config.paths.source}/fonts/**/*` ], () => gulp.start('fonts') );
    watch([ `${config.paths.source}/icons/**/*`], () => gulp.start('icons') );
    watch([ `${config.paths.source}/images/**/*` ], () => gulp.start('images') );
    watch([ `${config.paths.source}/media/**/*` ], () => gulp.start('media') );
    watch([ `${config.paths.source}/**/*`, `CV.yaml` ], () => {
        setTimeout(() => {
            gulp.start('pug', () => { browserSync.reload(); })
        }, 262);
    });
    watch([ `${config.paths.source}/**/*.styl` ], () => gulp.start('styles') );
    watch([ `${config.paths.source}/**/*.js` ], () => gulp.start('js') );
});

//
//
// Start (care: needs clean first (default))
//
//

gulp.task('start', ['fonts', 'images', 'media', 'styles', 'js', 'icons'], () => {

    if (process.env.BUILD !== 'true') {
        gulp.start('browser-sync');
    }

    gulp.start('pug');

    if (process.env.BUILD !== 'true') {
        gulp.start('watch');
    }

    if (process.env.BUILD === 'true') {
        gulp.start('favicons');
        // Start the favicons task later... so you don't have to wait too long
    }
});

gulp.task('default', ['clean'], () => {
    gulp.start(['start']);
});
