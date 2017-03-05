'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import notify from 'gulp-notify';

import sourcemaps from 'gulp-sourcemaps';
import stylus from 'gulp-stylus';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

import debug from 'gulp-debug';

export default () => {
    return gulp.src([
            `./${config.paths.source}/css/all.styl`,
        ])
        .pipe(gulpif( process.env.BUILD === 'false',
            sourcemaps.init()
        ))
        .pipe( stylus({
            'include css': true,
            url: { name: 'url', limit: false }
        }) )
        .on('error', notify.onError( (error) => {

            console.log(error.message);

            // process message

            let regExpMessage = new RegExp(`^.*(\/${config.paths.source}\/.*):(\\d*):(\\d*)\n`);
            let messageMatches = error.message.match(regExpMessage);

            let path = messageMatches[1];
            let line = messageMatches[2];
            let char = messageMatches[3];

            // compose notification parts

            let title = `STYLUS ERROR – LINE ${line} (${error.name})`;
            let message = path; // + ' ' + mess;

            return { icon:false, title:title, message:message };
        }))
        .pipe(autoprefixer({ // CARE Autoprefixer slows (x5) this task down..!
            browsers: ['last 2 versions', 'ie >= 9']
        }))
        .on('error', notify.onError( (error) => {
            console.log(error);

            let title = `AUTOPREFIXER ERROR – ${error.name}`;
            let message = `${error.message}`;

            return { icon:false, title: title, message: message};
        }))
        .pipe(gulpif( process.env.BUILD === 'false',
            sourcemaps.write()
        ))
        .pipe(gulpif( process.env.BUILD === 'true',
            cleanCSS()
        ))
        .pipe(gulp.dest(`${process.env.DEST}/assets/css`))
        .pipe(gulp.dest(`${config.paths.source}/output/css`));
}
