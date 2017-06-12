fis.match('::packager', {
    spriter: fis.plugin('csssprites')
});

fis.match('*.{js,css,less,png,jpg}', {
    useHash: true
});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});
fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
});
fis.match('*.{css,less}', {
    optimizer: fis.plugin('clean-css')
});
fis.match('*.css', {
    useSprite: true,
});
fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});

fis.match('*.html', {
    //invoke fis-optimizer-html-minifier
    optimizer: fis.plugin('html-minifier')
});
