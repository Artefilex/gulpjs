// gulp.task => görev oluşturmak için
// gulp.src => kaynak dosyaların
// gulp.dest => degisiklik sonrası hedef dizin
// gulp.watch => gulp ile izleme nodemon misali
// pipe => modify işlemlerini belirtirken kullanılan fonksiyon

const gulp = require("gulp");
const imagemin = require("gulp-imagemin")
const uglify = require("gulp-uglify")
const cssmin = require("gulp-clean-css")
const concatJs = require("gulp-concat")
const babel = require("gulp-babel")
const autopre = require("gulp-autoprefixer")
const postcss = require('gulp-postcss');
const livereload = require("gulp-livereload");
const { async } = require("q");
// gulp.task("message", () => {
//   console.log("gulp ilk deneme");
// });
// gulp.task("message2", () => {
//   console.log("cagrıyı gulp message2 diye yaparız ");
// });
// gulp.task( "default", () =>{
//     console.log("default her seferin de calısabilen gulp ile cagrılır ")
// })

gulp.task("copy1",async ()=>{
   await  gulp.src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images/"));
   
})
gulp.task("copy2", async ()=>{
   await  gulp.src("./src/js/*.js")
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concatJs("index.js"))
    .pipe(gulp.dest("./dist/js/"))
  
})
gulp.task("copy3", async ()=>{
   await gulp.src("./src/styles/*.css")
    .pipe(cssmin())
    .pipe(gulp.dest("./dist/styles/"))
})

gulp.task("autopres" , async ()=>{
  await  gulp.src("./src/styles/bropther.css")
         .pipe(autopre('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'Firefox 14', 'opera 12.1', 'ios 6', 'android 4'))
         .pipe(cssmin())
         .pipe(gulp.dest("./bro/styles"))
})

gulp.task("copy" , gulp.parallel( "copy1","copy2" ,"copy3")
)
gulp.task("watch", async ()=>{
    livereload.listen()
    gulp.watch("./src/**", gulp.series("copy")).on("change", (path) => {
        console.log(`Dosya değişti: ${path}`);
        livereload.changed(path);})

})
gulp.task('default', gulp.series("copy", "watch"));

// gulp.task("izle", ()=>{
//     gulp.watch("./src/js/*.js",gulp.series("copy3"))
//     gulp.watch("./src/js/*.js",gulp.series("copy3"))
// })

// sass csse cevirme  npm  i  gulp-sass --save-dev
