'use strict';

import npm_package from '../package.json';
import config from '../gulpfile.config';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import gulpfilter from 'gulp-filter';
import notify from 'gulp-notify';

import pug from 'gulp-pug';
import pugIncludeGlob from 'pug-include-glob';

import htmlmin from 'gulp-htmlmin';
import yaml from 'js-yaml';
import fs from 'fs';

export default () => {

    const CV = yaml.safeLoad(fs.readFileSync('./CV.yaml', 'utf8'));

    return gulp
        .src([
            `./${config.paths.source}/website/*.pug`,
        ])
        .pipe(pug({
            pretty: true,
            data: {
                npm_package: npm_package,
                config: config,
                CV: CV,
            },
            plugins: [
                pugIncludeGlob({}),
            ]
        }))
        .on('error', notify.onError( (error) => {

            console.log(error);

            // Process path

            let path = error.path || error.filename;
            let regExpPath = new RegExp(`^.+(\/${config.paths.source}\/.+)$`);

            if (path) {
                path = path.replace(regExpPath, '$1');
            }

            // Process line number

            let line = error.line;

            if (!line) {

                if (error.showStack) {
                    let regExpMessage = new RegExp('^(?:.*\n.*)*([0-9]+)(?:.*\n.*)*');
                    let messageMatches = error.message.match(regExpMessage);

                    // DEBUG: console.log('############ LINE', messageMatches);

                    if (messageMatches) {
                        line = messageMatches[1];
                    }
                } else {
                    let regExpMessage = new RegExp('^.*:([0-9]+)\n','i');
                    let messageMatches = error.message.match(regExpMessage);

                    // DEBUG: console.log('############ LINE', messageMatches);

                    if (messageMatches) {
                        line = messageMatches[1];
                    }
                }
            }

            // Compose notification parts

            let title = `PUG ERROR${ line ? ' — LINE ' + line : '' }`;
            let message = `${path}\n${error.msg ? error.msg: ''}`;

            return { icon:false, title:title, message:message };
        }))
        .pipe(gulpif( process.env.BUILD === 'true',
            htmlmin({collapseWhitespace: true})
        ))
        .pipe(gulp.dest( process.env.DEST  ));
}
