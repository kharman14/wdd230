
function like(element){
    if(localStorage.getItem('storedColor') == 'black'){
        let  currentElement = element.querySelector('.thumbsUp');
        currentElement.style.color = 'orange';
        localStorage.setItem('storedColor', 'orange');
        console.log(localStorage.getItem('storedColor'));
    }else{
        let  currentElement = element.querySelector('.thumbsUp');
        currentElement.style.color = 'black';
        localStorage.setItem('storedColor', 'black');
    }
}

window.addEventListener('DOMContentLoaded', e => {
    let  currentElement_list = document.querySelectorAll('.thumbsUp');
    for (var i = 0; i < currentElement_list.length; i++) {
        currentElement_list[i].style.color = localStorage.getItem("storedColor");
    }
}); 