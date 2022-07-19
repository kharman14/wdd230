
window.onload = checkStorage;

function checkStorage() {
    let  currentElement_list = document.querySelectorAll('.thumbsUp0,.thumbsUp1,.thumbsUp2,.thumbsUp3,.thumbsUp4,.thumbsUp5');
    for (var i = 0; i < currentElement_list.length; i++) {
        let currentElement = document.querySelector(`.thumbsUp${i}`);
        currentElement.style.color = localStorage.getItem(`storedColors[${i}]`);
    }
}

function like(element){
    let  currentElement_list = document.querySelectorAll('.thumbsUp0,.thumbsUp1,.thumbsUp2,.thumbsUp3,.thumbsUp4,.thumbsUp5');
    for (var i = 0; i < currentElement_list.length; i++) {
        if (currentElement_list[i].className == element.firstChild.className){

            if(localStorage.getItem(`storedColors[${i}]`) == 'black'){
                let  currentElement = element.querySelector(`.thumbsUp${i}`);
                currentElement.style.color = 'orange';
                localStorage.setItem(`storedColors[${i}]`, 'orange');
            } else{
                let  currentElement = element.querySelector(`.thumbsUp${i}`);
                currentElement.style.color = 'black';
                localStorage.setItem(`storedColors[${i}]`, 'black');
            }
        }
    }
}
