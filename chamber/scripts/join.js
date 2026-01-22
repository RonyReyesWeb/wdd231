const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);
console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));
console.log(myInfo.get('organization'));
console.log(myInfo.get('description'));
console.log(myInfo.get('mbership'));


document.querySelector('#results').innerHTML = `
    <div class="member-card">
    <p>We received your application to join the chamber of commerce</p>
    <p>Here are the details of your application</p>
    <p><strong>Full name: </strong>${myInfo.get('first')} ${myInfo.get('last')}</p>
     <p><strong>Phone Number: </strong>${myInfo.get('phone')}</p>
    <p><strong>Email Address: </strong>${myInfo.get('email')}</p>
    <p><strong>Organization: </strong>${myInfo.get('organization')}</p>
    <p><strong>Description: </strong>${myInfo.get('description')}</p>
    <p><strong>Membership: </strong>${myInfo.get('membership')}</p>
    </div>
`;
