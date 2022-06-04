let elapsed = document.querySelector('#lastVisit');

let lastvisit = Number(window.localStorage.getItem('lastvisit'));
let numVisits = Number(window.localStorage.getItem('visit-ls'));

const currentvisit = Date.now() - lastvisit;

const daysbetween = currentvisit / (1000 * 60 * 60 * 24);

if (numVisits !== 0) {
    elapsed.textContent = `${Math.round(daysbetween)} days since your Last Visit`;
} else {
    elapsed.textContent = `This is your first visit.`;
}

numVisits++;

localStorage.setItem('lastvisit', Date.now());
localStorage.setItem('visit-ls', numVisits);
