import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import concat from "gulp-concat";
import browserSync from "browser-sync";
import gulpBabel from "gulp-babel";
import uglify from "gulp-uglify";
const sass = gulpSass(dartSass);

// Compilando o sass adicionando autoprefixed e dando refresh na página.
function compilaSass() {
  return gulp
    .src("./scss/*.scss")
    .pipe(sass({ style: "compressed" }))
    .pipe(
      autoPrefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      }),
    )
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}

// Tarefa do sass
gulp.task("sass", compilaSass);

function gulpJS() {
  return gulp
    .src("js/*.js")
    .pipe(concat("main.js"))
    .pipe(
      gulpBabel({
        presets: ["@babel/env"],
      }),
    )
    .pipe(uglify())
    .pipe(gulp.dest("./js"))
    .pipe(browserSync.stream());
}

gulp.task("mainjs", gulpJS);

// Função do BrowserSync
function browser() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}

// Tarefa do BrowserSync
gulp.task("browser-sync", browser);

// Função do watch para alterações em scss e html
function watch() {
  gulp.watch("./scss/*.scss", compilaSass);
  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("js/*js", gulpJS);
}

// Tarefa do watch
gulp.task("watch", watch);

// Tarefas default que executa o watch e browserSync
gulp.task("default", gulp.parallel("watch", "browser-sync", "sass", "mainjs"));
