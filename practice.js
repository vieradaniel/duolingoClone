
const lesson1 = document.querySelector('#lesson1');
const lesson2 = document.querySelector('#lesson2');
const one= document.querySelector('.one');
const two= document.querySelector('.two');


function showLessonMenu (lesson,number){
    lesson.addEventListener("click",function(){
        number.classList.toggle('show');
    })
}

showLessonMenu(lesson1,one);
showLessonMenu(lesson2,two);