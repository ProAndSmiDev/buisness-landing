const { src, dest, parallel, series, watch } = require('gulp'),
  sass = require('gulp-sass'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename'),
  prefix = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  sync = require('browser-sync'),
  fs = require('fs'),
  data = require('gulp-data'),
  pug = require('gulp-pug'),
  pugbem = require('gulp-pugbem'),
  concat = require('gulp-concat'),
  uglES = require('gulp-uglify-es').default,
  svg = require('gulp-svg-sprite'),
  imgMin = require('gulp-imagemin'),
  pngQuant = require('imagemin-pngquant'),
  ttf2woff2 = require('gulp-ttf2woff2'),
  root = {
    'dev': './app',
    'prod': './docs',
    'data': './app/data.json'
  },
  dev = {
    'pug': root.dev + '/views/**/*.pug',
    'es': root.dev + '/assets/es/**/*.js',
    'fonts': root.dev + '/assets/fonts/**/*.ttf',
    'sass': root.dev + '/assets/scss/styles.scss',
    'img': root.dev + '/assets/img/**/*.{jpg,png,jpeg,gif}',
    'svg': root.dev + '/assets/svg/**/*.svg',
  },
  prod = {
    'js': root.prod + '/js',
    'css': root.prod + '/css',
    'img': root.prod + '/img',
    'fonts': root.prod + '/fonts',
  };

/* Работа со стилями */
const styles = () => {
  return src(dev.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
    }).on('error', notify.onError()))
    .pipe(prefix([
      '> 1%',
      'ie 8',
      'ie 7',
      'last 15 versions'
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(sync.stream())
    .pipe(dest(prod.css));
};
const stylesMin = () => {
  return src(dev.sass)
    .pipe(sass({
      outputStyle: 'compressed',
    }).on('error', notify.onError()))
    .pipe(prefix([
      '> 1%',
      'ie 8',
      'ie 7',
      'last 15 versions'
    ]))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(sync.stream())
    .pipe(dest(prod.css));
};
/* Работа со стилями */

/* Работа со скриптами */
const es = () => {
  return src(dev.es)
    .pipe(concat('app.js'))
    .pipe(dest(prod.js));
};
const esMin = () => {
  return src(dev.es)
    .pipe(concat('app.min.js'))
    .pipe(uglES())
    .pipe(dest(prod.js));
};
/* Работа со скриптами */

/* Работа с шаблонизатором */
const pugtohtml = () => {
  return src(dev.pug)
    .pipe(data(() => JSON.parse(fs.readFileSync(root.data, 'utf-8'))))
    .pipe(pug({
      pretty: true, // поменять, если заказчику нужен html
      locals: root.data,
      plugins: [pugbem],
    }))
    .pipe(sync.stream())
    .pipe(dest(root.prod));
};
/* Работа с шаблонизатором */

/* Работа с иконками и картинками */
const svgtosprite = () => {
  return src(dev.svg)
    .pipe(svg({
      mode: {
        stack: {
          sprite: "../sprite.svg"
        },
        padding: 0
      }
    }))
    .pipe(sync.stream())
    .pipe(dest(prod.img));
};
const imgOpt = () => {
  return src(dev.img)
    .pipe(imgMin({
      interlaced: true,
      progressive: true,
      svgoPlugins: {removeViewBox: false},
      use: pngQuant(),
    }))
    .pipe(sync.stream())
    .pipe(dest(prod.img));
};
/* Работа с иконками и картинками */

/* Работа со шрифтами */
const fonts = () => {
  src(dev.fonts)
    .pipe(sync.stream())
    .pipe(dest(prod.fonts));

  return src(dev.fonts)
    .pipe(ttf2woff2())
    .pipe(sync.stream())
    .pipe(dest(prod.fonts));
}
/* Работа со шрифтами */

/* работа с localhost */
const watchFiles = () => {
  sync.init({
    server: {
      baseDir: root.prod
    },
    notify: false
  });

  watch(dev.fonts, fonts);
  watch(dev.svg, svgtosprite);
  watch(dev.img, imgOpt);
  watch(dev.es, series(esMin, es));
  watch([root.dev + '/assets/scss/**/*.scss', root.dev + '/components/**/*.scss'], series(styles, stylesMin));
  watch([root.data, root.dev + '/**/*.pug'], pugtohtml);
};
/* работа с localhost */

/* Работа с изначальной сборкой проекта */
const buildProd = series(fonts, svgtosprite, imgOpt, esMin, stylesMin, pugtohtml);
const buildDev = series(fonts, svgtosprite, imgOpt, es, styles, pugtohtml);
/* Работа с изначальной сборкой проекта */

/* Таски проекта */
exports.build2prod = buildProd;
exports.build2dev = buildDev;
exports.default = watchFiles;
/* Таски проекта */