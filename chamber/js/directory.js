const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const businesses = jsonObject['affiliates'];
        businesses.forEach(displayBusiness);
    }) 

function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let member = document.createElement('p');
    let website = document.createElement('a');
    let phone = document.createElement('p');
    //let picture = document.createElement('img');
    //let contain = document.createElement('div');

    h2.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    member.textContent = `${business.membership} Member`;
    website.textContent = `${business.name} Website`;
    website.setAttribute('href', business.website);
    phone.textContent = `${business.phone}`;
    
    //picture.setAttribute('src', );
    //picture.setAttribute('alt', );
    //picture.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    //card.appendChild(picture);
    card.appendChild(address);
    card.appendChild(website);
    card.appendChild(phone);
    card.appendChild(member);

    document.querySelector('.cards').appendChild(card);
}
