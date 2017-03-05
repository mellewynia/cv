'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import notify from 'gulp-notify';

import clean from 'gulp-clean';

export default () => {
    return gulp.src( `${process.env.DEST}/media/`, {read: false} )
        .pipe( clean() )
        .on('end', () => {
            return gulp.src( `./${config.paths.source}/media/**` )
                .pipe(gulp.dest( `./${process.env.DEST}/media` ))
                .pipe(gulpif( process.env.BUILD === 'false',
                    notify({
                        icon: false,
                        onLast: true,
                        title: 'Media updated',
                        message: 'Cleaned and copied media to /media'
                    })
                ));
        });
}
