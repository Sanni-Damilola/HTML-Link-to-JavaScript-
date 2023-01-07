
document.getElementById('sometext').innerText = 'dami'
let friends = () => {
    let user = prompt ('what is your name?')
}

const editcolor = () => {
    let color_value = ['red' , 'blue', 'orange' , 'black']
    let random = Math.floor(Math.random() * color_value.length)
    document.getElementById('some').style.background = color_value[random]
}

const add = () => {
    let y = 10
    let z = 20
    return y + z
}
console.log(add(1,1))

const sub = () => {
    let y = 30
    let z = 20
    return y - z
}
console.log(sub(1,1))

const div = () => {
    let y = 30
    let z = 20
    return y / z
}
console.log(div(1,1))

const mut = () => {
    let y = 30
    let z = 20
    return y * z
}
console.log(mut(1,1))



