// Copyright Year
const currentDateandTime = new Date();
const copyrightyear = document.querySelector('#copyrightyear');

copyrightyear.textContent = currentDateandTime.getFullYear();

// Last Modified
let lastModif = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = lastModif;