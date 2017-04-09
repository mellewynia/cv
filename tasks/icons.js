'use strict';

import config from '../gulpfile.config';

import fs from 'fs';

import gulp from 'gulp';
import notify from 'gulp-notify';
import clean from 'gulp-clean';

import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';

export default () => {

    const iconFontName = 'icons-web';
    let latestDate = new Date(2016, 11, 28, 11);

    // Get latest date
    let dates = [];

    const fileNames = fs.readdirSync(`${config.paths.source}/icons`);

    fileNames.forEach(fileName => {
        const fileStats = fs.statSync(`${config.paths.source}/icons/${fileName}`);

        //console.log(fileStats);
        dates.push(fileStats.ctime); // Change Time
        dates.push(fileStats.mtime); // Modified Time
        dates.push(fileStats.birthtime); // Birth Time
    });

    latestDate = dates.reduce((latestDate, currentDate) => {
        //console.log(latestDate < currentDate, latestDate, ' < ', currentDate)
        return latestDate < currentDate ? currentDate : latestDate;
    }, latestDate);

    latestDate = `${latestDate.getUTCFullYear()}-${latestDate.getUTCMonth() + 1}-${latestDate.getUTCDate()}T${latestDate.getUTCHours() + 1}-${latestDate.getUTCMinutes()}-${latestDate.getUTCSeconds()}-${latestDate.getUTCMilliseconds()}`;

    //console.log(latestDate);

    return gulp.src( `${config.paths.source}/icons/**` )
        .pipe(iconfontCss({
            // `cssClass` is being abused for a timestamp, to prevent cache issues!
            cssClass: latestDate,
            fontName: iconFontName,
            path: './src/css/icons/font-icons-web__TEMPLATE_FOR_STYL.txt',
            // `targetPath` is relative to the dest path
            targetPath: `../../../src/css/icons/font-icons-web__GENERATED_BY_GULP.styl`,
            fontPath: `/assets/fonts/icons-web`,
        }))
        .pipe(iconfont({
            fontName: 'icons-web', // required
            prependUnicode: true, // recommended option
            formats: ['ttf', 'woff', 'woff2'], // default, 'woff2' and 'svg' are available
            normalize: true,
            timestamp: latestDate, // recommended to get consistent builds when watching files
        }))
        .on('error', notify.onError(function (error) {

            console.log(error);
            let title = 'ICONS ERROR';
            let message = 'Please try again or restart gulp';

            return { icon: false, title: title, message: message };
        }))
        .pipe(notify({
            icon: false,
            title: 'ICONS UPDATED',
            message: 'You may have to reset your browser cache.'
        }))
        .pipe(gulp.dest( `${config.paths.source}/fonts/icons-web` ));
}
