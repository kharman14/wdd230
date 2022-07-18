const requestURL = 'json/templeinfo.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['temples'];
        businesses.forEach(displayTemples);
    }) 

function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    let dedicated = document.createElement('p');
    let ordinance = document.createElement('p');
    let session = document.createElement('p');
    let closure = document.createElement('p');
    let picture = document.createElement('img');
    let button = document.createElement('button');
    let button_text = document.createElement('span');

    h2.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    email.textContent = `${temple.email}`;
    services.textContent = `Services: ${temple.services}`;
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    ordinance.textContent = `Ordinance: ${temple.ordinance}`;
    session.textContent = `Sesson: ${temple.session}`;
    closure.textContent = `Closure: ${temple.closure}`;

    button_text.textContent = '👍 Like';
    button_text.classList.add('thumbsUp');
    button.appendChild(button_text);

    button.classList.add('like');
    button.setAttribute('onclick', 'like(this)')
    
    picture.setAttribute('src', temple.image);
    picture.setAttribute('alt', temple.name);
    picture.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(picture);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(dedicated);
    card.appendChild(ordinance);
    card.appendChild(session);
    card.appendChild(closure);
    card.appendChild(button);

    document.querySelector('.cards').appendChild(card);
}
