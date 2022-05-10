const currentDateandTime = new Date();
const copyrightyear = document.querySelector('#copyrightyear');

document.querySelector(".date").innerHTML = 
    currentDateandTime.toLocaleDateString('en-UK', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

copyrightyear.textContent = currentDateandTime.getFullYear();

let lastModif = new Date(document.lastModified);
let fullDate = lastModif.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastModif.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.getElementById("lastmodified").innerHTML = dateTime;