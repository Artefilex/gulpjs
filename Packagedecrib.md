# Gulp ile Web Geliştirme İçin Kullanışlı Paketler

Bu rehber, web geliştirme iş akışınızı otomatize etmek için kullanabileceğiniz Gulp paketlerini sunar. Gulp, web geliştirmenin yaygın görevlerini otomatize etmek için kullanılan bir görev yöneticisidir. Bu paketler, projenizin ihtiyaçlarına ve tercihlerinize bağlı olarak değişebilir, ancak genellikle temel olarak kabul edilen ve çok yönlü olan Gulp paketlerini içerir.

## Gulp Fonksiyonları

1. `gulp.task()`:
   `gulp.task()` işlevi, Gulp görevlerini tanımlamak için kullanılır. Örnek olarak

```javascript
gulp.task("styles", function () {
  // Stil görevi burada tanımlanır
});
```

2. `gulp.src()`:

`gulp.src()` işlevi, kaynak dosyaları seçmek ve işlemek için kullanılır. Örnek olarak

```javascript
gulp.src("src/styles/*.css");
```

3. `gulp.dest()`:

`gulp.dest()` işlevi, işlenmiş dosyaları hedef bir klasöre kaydetmek için kullanılır. Örnek olarak

```javascript
gulp.dest("dist/styles");
```

4. `gulp.pipe()`:

`gulp.pipe()` işlevi, Gulp görevlerini birbirine bağlamak ve ardışık işlem akışını oluşturmak için kullanılır. Örnek olarak

```javascript
gulp
  .src("src/styles/*.css")
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest("dist/styles"));
```

5. `gulp.watch()`:

`gulp.watch()` işlevi, belirli dosya veya dizinleri izlemek ve dosya değişiklikleri olduğunda belirtilen görevleri çalıştırmak için kullanılır. Örnek olarak

```javascript
gulp.watch("src/styles/*.scss", ["styles"]);
```

6. `gulp.series()` ve `gulp.parallel()`:

Bu işlevler, görevleri sırasıyla veya eşzamanlı olarak çalıştırmak için kullanılır. Örnek olarak

```javascript
gulp.task("build", gulp.series("clean", gulp.parallel("styles", "scripts")));
```

## Kullanışlı Gulp Paketleri

1. **gulp-concat**: Birden fazla dosyayı birleştirir, bu JavaScript veya CSS dosyalarını birleştirerek HTTP isteklerini azaltmak için kullanışlıdır.

```javascript
const concat = require("'gulp-concat");

gulp.task("command", () => {
  return gulp.src("file path").pipe(concat()).pipe(gulp.dest("new file path"));
});
```

2. **gulp-uglify**: JavaScript dosyalarını sıkıştırır, boyutlarını azaltır ve sayfa yükleme sürelerini iyileştirir.

```javascript
const uglify = require("gulp-uglify");

gulp.task("command", () => {
  return gulp
    .src("./somefile/js/**/*.js")
    .pipe(gulp.uglify())
    .pipe(gulp.dest("./dist/js/"));
});
```

3. **gulp-cssmin**: CSS dosyalarını sıkıştırır, dosya boyutunu azaltır ve sayfa yükleme performansını artırır.

```javascript
const cssmin = require("*gulp-clean-css");

gulp.task("command", () => {
  return gulp
    .src("./somefile/style/*.css")
    .pipe(gulp.cssmin())
    .pipe(gulp.dest("./dist/style/"));
});
```

4. **gulp-sass** veya **gulp-less**: Sass veya Less dosyalarını CSS'ye derler, ön işlemci dilleriyle çalışmayı kolaylaştırır.

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssmin = require("*gulp-clean-css");

gulp.task("sass", () => {
  return gulp
    .src("./styles/sass/**/*.scss")
    .pipe(sass())
    .pipe(sass().on("error", sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest(".dist/styles/"));
});
```

5. **gulp-autoprefixer**: CSS'nize otomatik olarak üretici önekler ekler, böylece farklı tarayıcılarla uyumluluğu sağlar.

```javascript
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixe");
const cssmin = require("gulp-clean-css");

gulp.task("autoprefixe", async () => {
  await gulp
    .src("./src/styles/**/*.css")
    .pipe(
      autoprefixe(
        "last 2 versions",
        "safari 5",
        "ie 8",
        "ie 9",
        "Firefox 14",
        "opera 12.1",
        "ios 6",
        "android 4"
      )
    )
    .pipe(cssmin())
    .pipe(gulp.dest("./dist/styles/"));
});
```

6. **gulp-imagemin**: Görselleri sıkıştırır, boyutlarını küçülterek web sitesi performansını optimize eder.

```javascript
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

gulp.task("copy1", async () => {
  await gulp
    .src("./src/images/**/*")  //tüm img dosyalarını aldık svg | png  | jpg | jpeg | gibi 
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images/"));
});
```

7. **gulp-rename**: Dosyaları yeniden adlandırmanıza olanak tanır, aynı dosyanın farklı sürümlerini oluştururken işe yarar.
  
   ```javascript
   const gulp = require("gulp")
   const rename = require("gulp-rename")
   gulp.task("rename" , async ()=>{
      await gulp.src("./src/main/text/something.txt")
                .pipe(rename("main/text/ciao/goodbye.md"))
                .pipe(gulp.dest("./dist"));
   }) 

   gulp.src(".src/**/hello.txt")
       .pipe(rename((path)=>{
        path.dirname += "/blabla"
        path.basename += "-goodbye"
        path.extname += ".md"
       }))
       .pipe(gulp.dest("./dist/"))

   ```

8. **gulp-babel**: Babel kullanarak JavaScript kodunu dönüştürür, modern JavaScript özelliklerini kullanmanıza olanak tanırken eski tarayıcılarla uyumluluğu sağlar.
    ```javascript
       const gulp = require("gulp")
       const babel = require("gulp-babel")
      const uglify = require("gulp.uglify")
      const concat = require("gulp-concat")
       gulp.task("babel", async ()=>{
          await gulp.src("./src/js/*.js")
                    .pipe(babel({
                         presets: ['@babel/env']
                    }))
                    .pipe(uglify())
                    .pipe(concat("index.js"))
                    .pipe(gulp.dest("./dist/js/"))
       })

       // npm i --save-dev gulp-babel @babel/core @babel/preset-env
   ```

9. **gulp-livereload** veya **browser-sync**: Geliştirme iş akışınıza canlı yeniden yükleme işlevselliği ekler, kodunuzda değişiklik yapıldığında tarayıcıyı otomatik olarak yeniler. Şimdi burda bir örnek çalıştıracağız. 
  paket:
   ```bash
   npm install --save-dev gulp gulp-uglify  gulp-babel gulp-clean-css gulp-livereload gulp-autoprefixer gulp-concat gulp-imagemin @babel/preset-env babel-core 
    ```
 
 örnek kullanım =>

    ```javascript
       const gulp = require("gulp")
       const livereload = require("gulp-uglify")
       const uglify = require("*gulp-livereload") 
       const cssmin = require("gulp-clean-css")
       const babel = require("gulp-babel")
       const autoprefixe = require("gulp-autoprefixer")
       const concat = require("gulp-concat")
       const imagemin = require("gulp-imagemin")

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
   gulp.task("paralel", gulp.parallel("js","html","css","imgmin"))
 
   gulp.task("watch", async () =>{
    livereload.listen()
    gulp.watch("./src/**" , gulp.series("paralel")).on("change",(path) =>{
      console.log(`File is Changed : ${path}` )
      livereload.changed(path)
    })
   })
   gulp.task('default', gulp.series("copy", "watch"));
   ```

10. **gulp-clean**: Dosyaları ve dizinleri temizler ve oluşturma işleminiz sırasında temiz bir derleme ortamını sağlamak için kullanışlıdır.
    ```javascript
       const gulp = require("gulp")
   ```
11. **gulp-svg-sprite**: Tekil SVG dosyalarından SVG sprite'ları oluşturur, projelerinizde SVG simgelerini yönetmeyi ve kullanmayı kolaylaştırır.
     ```javascript
        const gulp = require("gulp")
   ```
12. **gulp-eslint** veya **gulp-jshint**: JavaScript kodu hata denetimi için ESLint veya JSHint entegre eder, kod kalitesini korumanıza yardımcı olur.
     ```javascript
        const gulp = require("gulp")
   ```
13. **gulp-sourcemaps**: Sıkıştırılmış veya dönüştürülmüş kodun daha kolay hata ayıklanabilmesi için kaynak haritaları oluşturur.
      ```javascript
         const gulp = require("gulp")
   ```
14. **gulp-notify**: Görev tamamlandığında veya derleme işlemi sırasında hata oluştuğunda sizi bilgilendirmek için sistem bildirimleri gönderir.
      ```javascript
         const gulp = require("gulp")
   ```

## Kullanım

Bu paketleri projenize eklemek ve kullanmak için aşağıdaki adımları izleyebilirsiniz:

1. Projenizin kök dizininde bir `gulpfile.js` dosyası oluşturun.

2. Gulp paketlerini projenize ekleyin ve `gulpfile.js` dosyasında kullanın. Örnek bir Gulp görevi şu şekilde olabilir:

```javascript
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("scripts", function () {
  return gulp
    .src("js/*.js")
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});
```
