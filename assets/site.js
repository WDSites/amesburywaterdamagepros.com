(function(){
var btn=document.getElementById("menu-toggle"),menu=document.getElementById("mobile-menu");
if(btn&&menu){btn.addEventListener("click",function(){var o=menu.classList.toggle("open");btn.setAttribute("aria-expanded",o?"true":"false");btn.textContent=o?"Close":"Menu";});
window.addEventListener("resize",function(){if(window.innerWidth>900){menu.classList.remove("open");btn.setAttribute("aria-expanded","false");btn.textContent="Menu";}});}
var fab=document.getElementById("fab"),foot=document.querySelector(".sitefooter");
if(fab&&foot&&"IntersectionObserver" in window){new IntersectionObserver(function(e){fab.classList.toggle("hidden",e[0].isIntersecting);}).observe(foot);}
})();
