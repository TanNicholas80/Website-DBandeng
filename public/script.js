const button = document.getElementById('buttonToggle')
const menuMobile = document.getElementById('mobileMenu')
const menu = document.getElementById('changeMenu')

button.addEventListener('click', function(){
    // toggle mengadakan yang belum ada dan menghilangkan jika sudah ada
    menuMobile.classList.toggle('hidden');
    if(menuMobile.classList.contains('hidden')) {
        menu.src="img/more.png";
    } else {
        menu.src="img/close.png";
    };
});
