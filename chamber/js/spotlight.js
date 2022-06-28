const requestURL = 'json/data.json';
const cards = document.querySelector('#spotlight');

async function getBusinesses() {
    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        const businesses = chooseBusinesses(data);
        displayBusiness(businesses);
    } else {
        throw Error(response.statusText);
    }
}

function chooseBusinesses(data) {
    const goldMembers = data.businesses.filter(business => business.membership == 'Gold');
    let spotlight = [];
    for (let i = 0; i < 3; i++) {
        // generate random index
        let index = Math.floor(Math.random() * goldMembers.length);
        // add new business to the list
        spotlight.push(goldMembers[index]);
        // delete out of goldMembers list so it doesn't repeat
        goldMembers.splice(index, 1);
    }
    return spotlight;
}

function displayBusiness(data) {

    data.forEach(business => {
        // Create elements to add to the document
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let member = document.createElement('p');
        let website = document.createElement('a');
        let phone = document.createElement('p');
        let picture = document.createElement('img');

        // Set values
        h2.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        member.textContent = `${business.membership} Member`;
        website.textContent = `${business.name} Website`;
        website.setAttribute('href', business.website);
        phone.textContent = `${business.phone}`;
        picture.setAttribute('src', business.image);
        picture.setAttribute('alt', business.name);
        picture.setAttribute('loading', 'lazy');

        // Add to card element
        card.classList.add('spot');
        card.appendChild(h2);
        card.appendChild(picture);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(phone);
        card.appendChild(member);

        // Add to HTML
        cards.appendChild(card);
    });
}
getBusinesses();