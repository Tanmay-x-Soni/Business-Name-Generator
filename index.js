// Random business name generator.

const adjective = {
    0 : "Crazy",
    1 : "Amazing",
    2 : "Fire"
}
const shop_name = {
    0 : "Engine",
    1 : "Foods",
    2 : "Garments"
}
const extra = {
    0 : "Bros",
    1 : "Limited",
    2 : "Hub"
}

const random = () =>{

    return Math.floor(Math.random()*3);
       
}

console.log(`Your business company name is ${adjective[random()]} ${shop_name[random()]} ${extra[random()]}.`)

// you can add this line for browser view.

// document.write(`Your business company name is ${adjective[random()]} ${shop_name[random()]} ${extra[random()]}.`)
