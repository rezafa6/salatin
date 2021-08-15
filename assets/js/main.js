function openMobileMenu() {
    document.getElementById('mbl').style.display = 'block' ;
    setTimeout(function () {
        document.getElementById('ml').style.width = '100%';
    } , 300)
}

function closeMobileMenu() {
    document.getElementById('mbl').style.display = 'none' ;
}
