const gulp=require("gulp");
const less=require("gulp-less");

gulp.src("css/indextopstyle2.less",{base:"."}).pipe(less()).pipe(gulp.dest("."));