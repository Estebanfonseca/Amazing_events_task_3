let cardHome = document.getElementById("section")

let cardPast = document.getElementById("sectionPast")

let cardUpcomming = document.getElementById('section1')

let fecha = Date.parse(currentDate)

let past = events.filter(function(date){
    return Date.parse(date.date) < fecha
}).sort((a,b)=> a.name.localeCompare(b.name))

let upcomming = events.filter(function(date){
    return Date.parse(date.date) > fecha
}).sort((a,b)=> a.name.localeCompare(b.name))

let home = events.map(function(event){
    return event
}).sort((a,b)=> a.name.localeCompare(b.name))

function printCards(array,id){
    for(let i = 0;i< array.length;i++){
        let carta = document.createElement('div')
        carta.className ='card rounded-4 '
        carta.innerHTML+=` <img class="p-3 rounded-5" src="${array[i].image}" alt="${array[i].name}" height="250" />
        <article class="card-body">
            <h4>${array[i].name}</h4>
            <p>${array[i].description}</p>
            <a href="#" class="btn btn-secondary">see more</a>
        </article>`
        id?.appendChild(carta)
}}

printCards(past,cardPast)
printCards(upcomming,cardUpcomming)
printCards(home,cardHome)


