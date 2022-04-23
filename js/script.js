
const currentDateandTime = new Date();
const copyrightyear = document.querySelector('#copyrightyear');
const oLastModif = document.querySelector('#lastmodified');

copyrightyear.textContent = currentDateandTime.getFullYear();

oLastModif.textContent = currentDateandTime.lastmodified();


