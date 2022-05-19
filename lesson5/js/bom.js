const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

let index = 0;

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';
    if (myItem == '') {
        input.focus();
    } else if (index >= 25) {
        input.focus();
    } else {
        const listItem = document.createElement('li');
        const listText = document.createElement('p');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        list.appendChild(listItem);
        index += 1;

        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
            index -= 1;
        });
        input.focus();
    }
  });
