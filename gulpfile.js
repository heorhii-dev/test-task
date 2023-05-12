const {src, dest, watch} = require('gulp');
const concat = require('gulp-concat');

// Style
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer')

// Scripts
const uglify = require('gulp-uglify-es').default;


// Adjusting build
const buildConfig = {
    // file name
    readyStyleFileName: `section-new-featured-products.min.css`,
    readyJsFileName: `section-new-featured-products.min.js`,

    // paths
    workingStyleFilePath: `./app/scss/style.scss`,
    workingScriptFilePath: `./app/js/main.js`,

    readyJsFilePath: `./theme/assets/`,
    readyStyleFilePath: `./theme/assets/`

}

const build = {
    styles() {
        return src([
            `${buildConfig.workingStyleFilePath}`
        ])
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 version']}))
        .pipe(concat(`${buildConfig.readyStyleFileName}`))
        .pipe(scss({outputStyle: "compressed"}))
        .pipe(dest(`${buildConfig.readyStyleFilePath}`))
    },
    scripts() {
        return src([
            // imports
            `${buildConfig.workingScriptFilePath}`
        ])
        .pipe(concat(`${buildConfig.readyJsFileName}`))
        .pipe(uglify())
        .pipe(dest(`${buildConfig.readyJsFilePath}`))
    },
    watching: () => {
        watch([`${buildConfig.workingStyleFilePath}`], this.styles)
        watch([`${buildConfig.workingScriptFilePath}`], this.scripts)
    }
}
exports.styles = build.styles;
exports.scripts = build.scripts;  
exports.watching = build.watching;