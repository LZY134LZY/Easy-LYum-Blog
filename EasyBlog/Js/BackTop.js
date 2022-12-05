window.addEventListener('load', function () {
    var bak = document.querySelector('.bak');
    var kig = document.querySelector('.kTop');
    var kigTop = kTop.offsetTop;
    var bakTop = bak.offsetTop - kigTop;
    document.addEventListener('scroll', function () {
        console.log(window.pageYOffset);
        if (window.pageYOffset >= 100) {
            // bak.style.display = 'block';
            bak.style.position = 'fixed';
            // bak.style.top = bakTop + 'px';
        } else {
            // bak.style.display = 'none';
            bak.style.position = 'absolute';
            bak.style.top = '300px';
        }
    })
});