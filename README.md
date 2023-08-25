# Gulp Nedir? Ne İşe Yarar?

Gulp, web geliştirme süreçlerini otomasyonlaştırmak için kullanılan bir JavaScript aracıdır. Bu araç, tekrarlayan veya zaman alıcı görevleri otomatikleştirmenize yardımcı olmak amacıyla tasarlanmıştır. JavaScript ve Node.js tabanlı bir araç olan Gulp, projenizdeki kaynak dosyalarını işlemek, dönüştürmek ve optimize etmek için kullanılır.

## Gulp'un Avantajları

- **Verimlilik:** Gulp, belirli bir sırayla ve mantıkla işlemleri otomatikleştirir, bu da geliştiricilerin süreci daha hızlı hale getirmesine yardımcı olur.
- **Modülerlik:** Gulp, çeşitli eklentiler ve modüller aracılığıyla genişletilebilir. Örneğin, belirli görevleri gerçekleştirmek için JavaScript dosyalarını birleştirmek veya CSS dosyalarını sıkıştırmak gibi özel eklentiler bulunabilir.
- **Kolay Öğrenme Eğrisi:** Gulp, basit ve sezgisel bir API'ye sahiptir, bu da yeni geliştiricilerin hızla öğrenmesine olanak tanır.
- **Canlı Yeniden Yükleme (Live Reload):** Gulp, kodunuzda yapılan değişikliklerde tarayıcıyı otomatik olarak yeniden yükleme gibi canlı geliştirme işlemlerini de destekler. Bu, anlık geri bildirim almanıza yardımcı olabilir.

## Nasıl Kullanılır?

Gulp'un temel çalışma prensibi, kaynak dosyalarını bir dizi işleme adımından geçirerek hedef dosyaları üretmektir. Bu işlemler, projenizin ana dizininde bulunan `gulpfile.js` adlı dosyada tanımlanır. Bu dosya, Gulp görevlerinizi belirtmenizi sağlar.

## Gulp Methodları

Gulp, geniş bir eklenti ekosistemiyle birlikte gelir ve bu eklentiler aracılığıyla çeşitli görevleri otomatikleştirebilirsiniz.

1. **Dosya İşleme:**

   - `gulp.src()`: Kaynak dosyalarını seçmek için kullanılır.
   - `gulp.dest()`: İşlenmiş dosyaların çıkış dizinini belirlemek için kullanılır.
   - `gulp.watch()`: Dosyaları izlemek ve otomatik olarak işlemek için kullanılır.

   ```javascript
   const gulp = require("gulp");

   gulp.task("copyFiles", () => {
     return gulp
       .src("src/images/*") // src images altındaki tüm dosyları alır
       .pipe(gulp.dest("dist/images"));
   });
   gulp.task("watchFiles", () => {
     gulp.watch("src/js/*.js", gulp.series("scripts"));
   });
   ```

2. **Dosya Birleştirme ve Sıkıştırma:**

   - `gulp-concat`: Birden fazla dosyayı birleştirmek için kullanılır.
   - `gulp-uglify`: JavaScript dosyalarını sıkıştırmak için kullanılır.
   - `gulp-cssmin`: CSS dosyalarını sıkıştırmak için kullanılır.
   - `gulp-htmlmin`: HTML dosyalarını sıkıştırmak için kullanılır.

   ```javascript
   const gulp = requier("gulp")
   const concat = requier("gulp-concat")
   const uglify = requier("gulp-uglify")
   const cssmin =requier("gulp-cssmin")
   const htmlmin = requier("gulp-htmlmin")

   gulp.task("js",()=>{
      return gulp.src("src/js/*.js")
      .pipe(concat("all.js"))
      .pipe(uglify())
      .pipe(gulp.dest("dist/js"))
   })
   gulp.task("css",()=>{
       return gulp.src("src/css/*.css")
       .pipe(concat("styles.css"))
       .pipe(cssmin())
       .pipe(gulp.dest("dist/css"))
   })

   gulp.task("html" ()=>{
       return gulp.src("src/html/*.html")
       .pipe(htmlmin(collapseWhitespace : true)) // HTML dosyasını sıkıştır ve beyaz boşlukları kaldır
       .pipe(gulp.dest("dist"))
   })

   ```

   Yukarıdaki örnekte gulp-htmlmin eklentisi, collapseWhitespace seçeneğini true olarak ayarlanmış bir şekilde kullanılmıştır. Bu, HTML dosyasındaki gereksiz boşlukları kaldırarak dosyanın boyutunu azaltacaktır. Eğer collapseWhitespace seçeneği false olarak ayarlanırsa, beyaz boşluklar kaldırılmaz ve dosya sadece sıkıştırılır.

   Bu işlem, genellikle web sayfalarının daha hızlı yüklenmesini ve daha az veri tüketmesini sağlamak için yapılır.

3. **Resim Optimizasyonu:**
   - `gulp-imagemin`: Resim dosyalarını optimize etmek için kullanılır.

```javascript
  const {src , dest , lastRun ,watch} = require("gulp")
  const imagemin = require("gulp-imagemin")
  const images = ()=>{
   return src("src/images/**/*.jpg" , {since: lastRun(images)})
   .pipe(imagemin())
   .pipe(dest("dist/img/"))
  }

  export default = () =>{
   watch("src/images/**/*.jpg", images)
  }
```

Bu kod parçası, Gulp görevlerini kullanarak resim optimizasyonunu otomatikleştirir.`images` fonksiyonu, `gulp-imagemin` eklentisini kullanarak JPG resim dosyalarını optimize eder. `lastRun(images)` ifadesi, son çalıştırıldığında `images` görevinin işlendiği son tarihi alır. Bu, sadece en son değiştirilen resim dosyalarını işlemenizi sağlar.

`exports.default` fonksiyonu ise `gulp.watch()` ile izlenen resim dosyalarındaki herhangi bir değişiklik olduğunda `images` fonksiyonunu çağırarak resimleri optimize eder ve işlenmiş resimleri belirli bir çıkış dizinine kaydeder.
Not : `lastRun` fonksiyonu, Gulp görevlerinin sadece değişen veya yeni eklenen dosyalara odaklanmasını sağlayan bir özelliğidir

4. **Canlı Yeniden Yükleme (Live Reload):**

   - `gulp-livereload`: Tarayıcıyı otomatik olarak yeniden yüklemek için kullanılır.
   - `gulp-connect`: Dahili bir sunucu oluşturarak canlı yeniden yükleme sağlamak için kullanılır.

   ```javascript
   const gulp = require("gulp");
   const connect = require("gulp-connect");
   gulp.task("connect", function () {
     connect.server({
       livereload: true,
     });
   });

   gulp.task("html", () => {
     return gulp
       .src("src/*.html")
       .pipe(gulp.dest("dist"))
       .pipe(connect.reload());
   });
   ```

5. **Veri Kopyalama:**

   - `gulp-copy`: Belirli dosyaları veya dizinleri kopyalamak için kullanılır.

   ```javascript
   const gulp = require("gulp");
   const copy = require("gulp-copy");

   gulp.task("copyFiles", function () {
     return gulp.src("src/fonts/*").pipe(copy("dist/fonts", { prefix: 1 }));
   });
   ```

6. **Sass veya Less Dönüşümü:**

   - `gulp-sass`: Sass dosyalarını CSS'ye dönüştürmek için kullanılır.
   - `gulp-less`: Less dosyalarını CSS'ye dönüştürmek için kullanılır.

   ```javascript
   const gulp = require("gulp");
   const sass = require("gulp-sass");
   const less = require("gulp-less");
   
    gulp.task('sass', function() {
    return gulp.src('src/sass/\*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
    });

    gulp.task('less', function() {
    return gulp.src('src/less/\*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
    });
    ```

7. **Çeşitli Görevler:**

- `gulp-clean`: Dosya veya dizinleri temizlemek için kullanılır.
- `gulp-rename`: Dosya adlarını değiştirmek için kullanılır.
- `gulp-babel`: ES6+ JavaScript kodunu tarayıcı uyumlu JavaScript'e dönüştürmek için kullanılır.
- `gulp-pipe`: Gulp akışını (stream) yönlendirmek ve ardışık işlemleri birleştirmek için kullanılan bir yöntemdir. Gulp, kaynak dosyaları işlerken bir akış (stream) oluşturur ve bu akış, belirli işlemlerden geçerken bir tür boru hattı gibi düşünülebilir.
- `gulp-series` : `gulp.series()`fonksiyonu, verilen Gulp görevlerini sırayla çalıştırmak için kullanılır. Eğer birden fazla görevi aynı anda çalıştırmak isteseniz, `gulp.parallel()`fonksiyonunu kullanabilirsiniz.
- `gulp-pug`: Pug (Jade) şablonlarını HTML'ye dönüştürmek için kullanılır.

```javascript
    const gulp = require('gulp');
    const pug = require('gulp-pug');

    gulp.task('pug', function() {
    return gulp.src('src/templates/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'));
    });

```
