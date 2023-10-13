document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.navlist');
   
    
    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});