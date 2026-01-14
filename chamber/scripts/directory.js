document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

const navbuttom = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navlinks.classList.toggle('show');
});



const membersContainer = document.querySelector("#members-container");

async function GetMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    console.log(data);
}

GetMembers();