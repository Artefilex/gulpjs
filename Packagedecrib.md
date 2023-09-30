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
const concat = require("'gulp-concat")

gulp.task("command",()=>{
 return gulp.src("file path")
 .pipe(concat())
 .pipe(gulp.dest("new file path"))
})

```

2. **gulp-uglify**: JavaScript dosyalarını sıkıştırır, boyutlarını azaltır ve sayfa yükleme sürelerini iyileştirir.

```javascript
  const uglify = require("gulp-uglify")

  gulp.task( "command", ()=>{
     return  gulp.src("./somefile/js/**/*.js")
             .pipe(gulp.uglify())
             .pipe(gulp.dest("./dist/js/"))
  })
```

3. **gulp-cssmin**: CSS dosyalarını sıkıştırır, dosya boyutunu azaltır ve sayfa yükleme performansını artırır.

```javascript 
  const cssmin = require("*gulp-cssmin")

  gulp.task( "command", ()=>{
     return  gulp.src("./somefile/style/*.css")
             .pipe(gulp.cssmin())
             .pipe(gulp.dest("./dist/style/"))
  })
```

4. **gulp-sass** veya **gulp-less**: Sass veya Less dosyalarını CSS'ye derler, ön işlemci dilleriyle çalışmayı kolaylaştırır.

```javascript 
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require("*gulp-cssmin")
gulp.task("sass" , ()=>{
  return gulp.src("./styles/sass/**/*.scss")
         .pipe(sass())
        .pipe(sass().on('error', sass.logError))
         .pipe(cssmin())
         .pipe(gulp.dest(".dist/styles/"))
})
```

5. **gulp-autoprefixer**: CSS'nize otomatik olarak üretici önekler ekler, böylece farklı tarayıcılarla uyumluluğu sağlar.

```javascript 

```

6. **gulp-imagemin**: Görselleri sıkıştırır, boyutlarını küçülterek web sitesi performansını optimize eder.
```javascript ```
7. **gulp-rename**: Dosyaları yeniden adlandırmanıza olanak tanır, aynı dosyanın farklı sürümlerini oluştururken işe yarar.
```javascript ```
8. **gulp-babel**: Babel kullanarak JavaScript kodunu dönüştürür, modern JavaScript özelliklerini kullanmanıza olanak tanırken eski tarayıcılarla uyumluluğu sağlar.
```javascript ```
9. **gulp-livereload** veya **browser-sync**: Geliştirme iş akışınıza canlı yeniden yükleme işlevselliği ekler, kodunuzda değişiklik yapıldığında tarayıcıyı otomatik olarak yeniler.
```javascript ```
10. **gulp-watch**: Dosyaları değişiklikleri izler ve değişiklikler meydana geldiğinde Gulp görevlerini tetikler, geliştirme sürecinizi otomatikleştirmenize yardımcı olur.
```javascript ```
11. **gulp-clean**: Dosyaları ve dizinleri temizler ve oluşturma işleminiz sırasında temiz bir derleme ortamını sağlamak için kullanışlıdır.
```javascript ```
12. **gulp-svg-sprite**: Tekil SVG dosyalarından SVG sprite'ları oluşturur, projelerinizde SVG simgelerini yönetmeyi ve kullanmayı kolaylaştırır.
```javascript ```
13. **gulp-eslint** veya **gulp-jshint**: JavaScript kodu hata denetimi için ESLint veya JSHint entegre eder, kod kalitesini korumanıza yardımcı olur.
```javascript ```
14. **gulp-sourcemaps**: Sıkıştırılmış veya dönüştürülmüş kodun daha kolay hata ayıklanabilmesi için kaynak haritaları oluşturur.
```javascript ```
15. **gulp-notify**: Görev tamamlandığında veya derleme işlemi sırasında hata oluştuğunda sizi bilgilendirmek için sistem bildirimleri gönderir.
```javascript ```
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
