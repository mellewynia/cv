'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';
import notify from 'gulp-notify';

import clean from 'gulp-clean';

export default () => {

    return gulp.src( `${process.env.DEST}/assets/fonts`, {read: false} )
        .pipe(clean())
        .on('end', () => {
            return gulp.src( `./${config.paths.source}/fonts/**/*` )
                .pipe(gulp.dest( `${process.env.DEST}/assets/fonts` ))
                .pipe(notify({
                    icon: false,
                    onLast: true,
                    title: `Font assets updated`,
                    message: `Cleaned and copied font to dist/assets/fonts`
                }));
        });
}
