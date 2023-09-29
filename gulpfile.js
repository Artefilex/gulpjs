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
// gulp.task("message", () => {
//   console.log("gulp ilk deneme");
// });
// gulp.task("message2", () => {
//   console.log("cagrıyı gulp message2 diye yaparız ");
// });
// gulp.task( "default", () =>{
//     console.log("default her seferin de calısabilen gulp ile cagrılır ")
// })

gulp.task("copy1",()=>{
    gulp.src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images/"));
   
})
gulp.task("copy2",()=>{
    gulp.src("./src/js/*.js")
    .pipe(uglify())
    .pipe(concatJs("index.js"))
    .pipe(gulp.dest("./dist/js/"))
})
gulp.task("copy3",()=>{
    gulp.src("./src/styles/*.css")
    .pipe(cssmin())
    .pipe(gulp.dest("./dist/styles/"))
})
gulp.task("copy" , gulp.parallel( "copy1","copy2" ,"copy3")
)

gulp.task('default', gulp.series("copy"))

gulp.task("izle", ()=>{
    gulp.watch("./src/js/*.js",gulp.series("copy3"))
    gulp.watch("./src/js/*.js",gulp.series("copy3"))
})

// sass csse cevirme  npm  i  gulp-sass --save-dev
