
const lesson = document.querySelector('.lesson-icon-border');
const lessonMenu= document.querySelector('.lesson-menu');

lesson.addEventListener("click",function(){
    lessonMenu.classList.toggle('show');
})