let fecha = Date.parse(currentDate)

let upcomming = events.filter(function(date){
    return Date.parse(date.date) > fecha
}).sort((a,b)=> a.name.localeCompare(b.name))


let card = document.getElementById('section1')



function cards (data){
    data.forEach(item => {
        let carta = document.createElement('div')
        carta.className ='card rounded-4 '
        carta.innerHTML+=` <img class="p-3 rounded-5" src="${item.image}" alt="${item.name}" height="250" />
        <article class="card-body">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <button class="btn btn-secondary" id="btn-details" ><a href="./details.html" class="nav-link text-white">see more</a></button>
        </article>`
        card.appendChild(carta)
    })
}

cards(upcomming)