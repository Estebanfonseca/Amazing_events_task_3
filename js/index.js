const cardHome = document.getElementById("section")

const cardPast = document.getElementById("sectionPast")

const cardUpcomming = document.getElementById('section1')

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
    array.forEach(card=>{
        let carta = document.createElement('div')
        carta.className ='card rounded-4 '
        carta.innerHTML+=` <img class="p-3 rounded-5" src="${card.image}" alt="${card.name}" height="250" />
        <article class="card-body">
            <h4>${card.name}</h4>
            <p>${card.description}</p>
            <button class="btn btn-secondary" id="btn-details" ><a href="./details.html" class="nav-link text-white">see more</a></button>
        </article>`
        id?.appendChild(carta)
})}

// function otra (array,id){
//     array.forEach(card =>{
//         id.innerHTML+=` <div class="card rounded-4">
//         <img class="p-3 rounded-5" src="${card.image}" alt="${card.name}" height="250" />
//         <article class="card-body">
//             <h4>${card.name}</h4>
//             <p>${card.description}</p>
//             <button class="btn btn-secondary" id="btn-details" ><a href="./details.html" class="nav-link text-white">see more</a></button>
//         </article>
//         <div/>`
//     })
// }
// console.log(otra(home,cardHome))

let section = document.querySelectorAll("section")

printCards(past,cardPast)
printCards(upcomming,cardUpcomming)
printCards(home,cardHome)

let checkbox = document.querySelectorAll("input")
let data = {}

// if(document.getElementById("section1")){ alert("element exists"); } else { alert("Element does not exist"); }
// if(document.getElementById("sectionPast")){ alert("element exists"); } else { alert("Element does not exist"); }
// if(document.getElementById("section")){ alert("element exists"); } else { alert("Element does not exist"); }




function filter(fn , value){
    let categorie = home
    data[fn]= value
    for (let category in data) {
        if (category == 'isSpecialist') {
            categorie = categorie.filter(mentor => mentor.category.includes(data[category]))
        }
        // if (category == 'matchesWithText') {
        //     categorie = categorie.filter(mentor => mentor.fullName.toLowerCase().includes(applied[category].toLowerCase()))
        // }
    }
    return categorie
}





function updateCards(element,data,fn){
    element.innerHTML = ' '
    data.forEach(fn)
}
checkbox[1].addEventListener("click",function (event){
    cat = home.filter((value)=> value.category.includes(event.target.value))
    console.log(cat)
})
checkbox[2].addEventListener("change",function (event){
    cat = home.filter((value)=> value.category.includes(event.target.value))
    console.log(cat);
    
})
checkbox[3].addEventListener("change",function (event){
    cat = home.filter((value)=> value.category.includes(event.target.value))
    console.log(cat);
})
checkbox[4].addEventListener("change",function (event){
    cat = home.filter((value)=> value.category.includes(event.target.value))
    console.log(cat);
})
checkbox[5].addEventListener("change",function (event){
    cat = home.filter((value)=> value.category.includes(event.target.value))
    console.log(cat);
})
checkbox[6].addEventListener("change",function (event){
    cat = home.filter((value)=> value.category.includes(event.target.value))
    console.log(cat);
})
checkbox[7].addEventListener("change",function (event){
    cat = home.filter((value)=> value.category.includes(event.target.value))
    console.log(cat);
})
