
let state = true;

function like(element){
    if(state){
        let  currentElement = element.querySelector('.thumbsUp');
        currentElement.style.color = 'orange';
        localStorage.setItem('storedColor', 'orange');
        console.log(localStorage.getItem('storedColor'));
    }else{
        let  currentElement = element.querySelector('.thumbsUp');
        currentElement.style.color = 'black';
        localStorage.setItem('storedColor', 'black');
    }
    state = !state;
}

window.addEventListener('DOMContentLoaded', e => {
    let  currentElement_list = document.querySelectorAll('.thumbsUp');
    for (var i = 0; i < currentElement_list.length; i++) {
        currentElement_list[i].style.color = localStorage.getItem("storedColor");
    }
}); 