var gulp = require('gulp');
var settings = require('../settings');

// Generate new favicons

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('favicon:generate', function(done) {
    realFavicon.generateFavicon({
        masterPicture: settings.dir.extension + settings.dir.favicon + '/source/' + settings.favicon.filename,
        dest: settings.dir.extension + settings.dir.favicon,
        iconsPath: settings.dir.extension + settings.dir.favicon,
        design: {
            ios: {
                pictureAspect: 'backgroundAndMargin',
                backgroundColor: settings.favicon.faviconBackground,
                margin: '14%',
                assets: {
                    ios6AndPriorIcons: false,
                    ios7AndLaterIcons: false,
                    precomposedIcons: true,
                    declareOnlyDefaultIcon: true
                }
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'whiteSilhouette',
                backgroundColor: settings.favicon.companyColor,
                onConflict: 'override',
                assets: {
                    windows80Ie10Tile: true,
                    windows10Ie11EdgeTiles: {
                        small: true,
                        medium: true,
                        big: true,
                        rectangle: true
                    }
                }
            },
            androidChrome: {
                pictureAspect: 'noChange',
                themeColor: settings.favicon.faviconBackground,
                manifest: {
                    name: settings.favicon.company,
                    display: 'browser',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                },
                assets: {
                    legacyIcon: false,
                    lowResolutionIcons: true
                }
            },
            safariPinnedTab: {
                pictureAspect: 'silhouette',
                themeColor: settings.favicon.companyColor
            }
        },
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false
        },
        markupFile: settings.favicon.dataFile
    }, function() {
        done();
    });
});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('favicon:create', ['favicon:generate'], function() {
    console.log(JSON.parse(fs.readFileSync(settings.favicon.dataFile)).favicon.html_code);
});

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task('favicon:check-for-updates', function(done) {
    var currentVersion = JSON.parse(fs.readFileSync(settings.favicon.dataFile)).version;
    realFavicon.checkForUpdates(currentVersion, function(err) {
        if (err) {
            throw err;
        }
    });
});