// прелоудер
document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('body div.container');
    mainContent.style.opacity = '0';
    mainContent.style.display = 'flex';
  
    function hidePreloader() {
      preloader.style.display = 'none';
      mainContent.style.opacity = '1';
    }
  
    setTimeout(hidePreloader, 2600);
});