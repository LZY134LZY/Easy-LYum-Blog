
window.addEventListener('load', function () {
    var left = document.querySelector('.right');
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 850) {
            right.style.display = 'none';
        } else {
            right.style.display = 'block';
        }
    })
})