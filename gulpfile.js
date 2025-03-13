//Essas variaveis exportam o Gulp e o sass
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// 
function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
    // Essa funcion vai compilar o sass em um csse criar a pasta 
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles))
}
// para rodar outra vez use npm run build watch