let products = {
    cars: 'toyota',
    extentions: 'bonestraight',
    laptop: 'dell',
}

let keys = Object.keys(products)
let values = Object.values(products)
console.log(products)
console.log(keys)
console.log(values)

if(keys.includes(cars)){
    console.log(products.cars)
}