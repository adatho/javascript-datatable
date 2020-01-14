"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create();

/**
 * scss -> css
 */
function css() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}

/**
 * compile javascript with babel
 */
function javascript() {
  return gulp
    .src("src/js/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env", "minify"], comments: false
      })
    )
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}

/**
 * watcher, uses css and javascript
 */
function watcher() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  // watch scss for changes, rerun css
  gulp.watch("src/scss/**/*.scss", css);

  // watch js for changes, recompile it
  gulp.watch("src/js/**/*.js", javascript);

  // watch html for changes and reload the "browser"
  gulp.watch("./**/*.html").on("change", browserSync.reload);
}

exports.css = css;
exports.js = javascript;
exports.watcher = watcher;
