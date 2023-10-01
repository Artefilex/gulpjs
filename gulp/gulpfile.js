const gulp = require("gulp")
const livereload = require("gulp-livereload")
const uglify = require("gulp-uglify")
const cssmin = require("gulp-clean-css")
const babel = require("gulp-babel")
const autoprefixe = require("gulp-autoprefixer")
const concat = require("gulp-concat")
const imagemin = require("gulp-imagemin")
const rename = require("gulp-rename")

gulp.task("css", async ()=>{
await gulp.src("./src/styles/*.css")
        .pipe(autoprefixe('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'Firefox 14', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(cssmin())
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("./dist/styles/"))
})
gulp.task("js", async ()=>{
await gulp.src("./src/js/*.js")
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat("index.js"))
    .pipe(gulp.dest("./dist/js/"))
})
gulp.task("imgmin", async()=>{
 await  gulp.src("./src/images/**/*")
       .pipe(imagemin())
      .pipe(gulp.dest("./dist/images/"));
})
gulp.task("html", async ()=>{
 await gulp.src("./src/index.html")
      .pipe(gulp.dest("./dist/"))
})

gulp.task("parallel", gulp.parallel("js","html","css","imgmin"))

gulp.task("watch", async () =>{
livereload.listen()
gulp.watch("./src/\*\*" , gulp.series("parallel")).on("change",(path) =>{
console.log(`File is Changed : ${path}` )
livereload.changed(path)
})
})
gulp.task('default', gulp.series("parallel", "watch"));
