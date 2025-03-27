//Essas variaveis exportam os plugins instalados
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
}

// 
function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
    // Essa funcion vai compilar o sass em um csse criar a pasta 
}

function images(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
    // Essa funcion vai minificar as imagens
}
// define tarefas a serem executadas
exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}
// para rodar outra vez use npm run build watch