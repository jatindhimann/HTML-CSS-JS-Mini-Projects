const xmark = document.querySelector('.fa-xmark');
const sidebar = document.querySelector('.side-bar');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click',function(){
    sidebar.classList.toggle("show-sidebar");
});

xmark.addEventListener('click',function(){
    sidebar.classList.remove("show-sidebar");
});