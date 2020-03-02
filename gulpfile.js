"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const gcmq = require("gulp-group-css-media-queries");
// const cleanCSS = require("gulp-clean-css");

sass.compiler = require("node-sass");

function style() {
  return (
    gulp
      .src("./sass/style.scss")
      .pipe(sass.sync().on("error", sass.logError))
      .pipe(
        autoprefixer({
          browsers: ["> 0.1%"],
          cascade: false
        })
      )
      .pipe(gcmq())
      // .pipe(cleanCSS({ level: 2 }))
      .pipe(gulp.dest("./css"))
  );
}

function watch() {
  gulp.watch("./sass/**/*.scss", style);
}

gulp.task("style", style);
gulp.task("watch", watch);
