'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var ts = require('gulp-typescript');
var babel = require("gulp-babel");
var $ = require('gulp-load-plugins')();

gulp.task('default', ['jsx-js', 'tsx-jsx'], function (cb) {
  return cb;
});

// TSX to JSX
gulp.task("tsx-jsx", function () {
  var tsResult = gulp.src('tsx/**/*.tsx')
    .pipe(ts({
      typescript: require('typescript'),
      "target": "es6",
      "jsx": "preserve",
      "module": "es6"
    }));
  return tsResult.js.pipe(gulp.dest('dist/jsx'));
});

// JSX to JS
gulp.task("tsx-jsx-js", ["tsx-jsx"], function () {
  return gulp.src(["dist/jsx/**/*.jsx"])
    .pipe($.sourcemaps.init())
    .pipe($.concat("react-office-ui-jsx.js"))
    .pipe(babel({
      "presets": ["es2015", "react"]
    }))
    .pipe($.sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

// TSX to JS
gulp.task("tsx-js", function () {
  var tsResult = gulp.src('tsx/**/*.tsx')
    .pipe($.sourcemaps.init())
    .pipe($.concat("react-office-ui.tsx"))
    .pipe(ts({
      typescript: require('typescript'),
      "target": "es5",
      "jsx": "react",
      "module": "none"
    }));
  return tsResult.js
    .pipe($.sourcemaps.write("."))
    .pipe(gulp.dest('dist'));
});

gulp.task("build", ["tsx-jsx-js", "tsx-js"], function (c) {
  return c();
});

