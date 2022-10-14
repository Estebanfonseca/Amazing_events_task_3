let home = events.map(function(event){
    return event
}).sort((a,b)=> a.name.localeCompare(b.name))

let card = document.getElementById("section")




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

cards(home)

let checkbox = document.querySelectorAll("input")
let data = {}






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