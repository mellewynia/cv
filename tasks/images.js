'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import notify from 'gulp-notify';

import clean from 'gulp-clean';
import imagemin from 'gulp-imagemin';

export default () => {

    return gulp.src( `${process.env.DEST}/assets/images`, {read: false} )
        .pipe(clean())
        .on('end', () => {
            return gulp.src( `./${config.paths.source}/images/**` )
                .pipe(gulpif( process.env.BUILD === 'true',
                    imagemin({
                        progressive: true
                    })
                ))
                .pipe(gulp.dest( `./${process.env.DEST}/assets/images` ))
                .pipe(notify({
                    icon: false,
                    onLast: true,
                    title: `Image asset updated`,
                    message: `Cleaned${process.env.BUILD === 'true' ? `, optimized` : ``} and copied images to /assets/image`
                }));
        });
}
