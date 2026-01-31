import { Places } from '../data/places.mjs'

const Showhere = document.querySelector("#allplaces")

function displayItems(places) {
    places.forEach(x => {
        const thecard = document.createElement('div')
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.photo}`
        thephoto.loading = "lazy";
        thephoto.alt = x.name
        thecard.appendChild(thephoto)

        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)

        const theaddress = document.createElement('address')
        theaddress.innerText = x.address
        thecard.appendChild(theaddress)

        const thedesc = document.createElement('p')
        thedesc.innerHTML = x.description
        thecard.appendChild(thedesc)

        const learnMoreBtn = document.createElement('button')
        learnMoreBtn.innerText = "Learn More"
        learnMoreBtn.classList.add('learn-more')
        thecard.appendChild(learnMoreBtn)

        Showhere.appendChild(thecard)
    })
}

displayItems(Places)