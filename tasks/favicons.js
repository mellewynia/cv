'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import gulpfilter from 'gulp-filter';
import util from 'gulp-util';
import notify from 'gulp-notify';

import favicons from 'gulp-favicons';

import imagemin from 'gulp-imagemin';

export default () => {
    return gulp
        .src( `${config.paths.source}/favicon-template-1024x1024.png` )
        .pipe(favicons({
            path: `/assets/favicons`,
            pipeHTML: true,
            html: 'favicons.html',
            preferOnline: false,
            online: false,
            icons: {
                appleStartup: false,
                coast: false,
                firefox: false,
                yandex: false,
            },
        }))
        .on('error', util.log)
        .pipe(gulpif( process.env.BUILD === 'true',
            imagemin({
                progressive: true
            })
        ))
        .pipe(gulp.dest(`${process.env.DEST}/assets/favicons`))
        .pipe(notify({
            icon: false,
            onLast: true,
            title: `Favicons asset added/updated`,
            message: `You can force a favicon refresh by upping the\n ?v=XXXXXX in source/favicons.html`
        }));
}

/*


*/
