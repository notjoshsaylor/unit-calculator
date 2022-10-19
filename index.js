let num = 0
const input = document.getElementById("input")
const btn = document.getElementById("btn")
let meter = (num * 3.28084).toFixed(3)
const feet = (num * 0.3048).toFixed(3)
const kilo = (num * 2.20462).toFixed(3)
const pound = (num * 0.453592).toFixed(3)
const liter = (num * 0.264172).toFixed(3)
const gallon = (num * 3.78541).toFixed(3)

const lenEl = document.getElementById("len-el")
const volEl = document.getElementById("vol-el")
const massEl = document.getElementById("mass-el")
const button = document.getElementById("btn")


function render(){
    lenEl.textContent = `${num} Meters = ${feet} Feet | ${num} Feet = ${meter} Meters`
    volEl.textContent = `${num} Liters = ${gallon} Gallon | ${num} Gallons = ${liter} Liters`
    massEl.textContent = `${num} Kilos = ${pound} Pounds | ${num} Pounds = ${kilo} Kilos`
}

btn.addEventListener("click", function(){
    num = input.value
    let meter = (num * 3.28084).toFixed(3)
    const feet = (num * 0.3048).toFixed(3)
    const kilo = (num * 2.20462).toFixed(3)
    const pound = (num * 0.453592).toFixed(3)
    const liter = (num * 0.264172).toFixed(3)
    const gallon = (num * 3.78541).toFixed(3)
    console.log(feet)
    lenEl.textContent += `${num} Meters = ${feet} Feet | ${num} Feet = ${meter} Meters`
    volEl.textContent += `${num} Liters = ${gallon} Gallon | ${num} Gallons = ${liter} Liters`
    massEl.textContent += `${num} Kilos = ${pound} Pounds | ${num} Pounds = ${kilo} Kilos`
    render()
})

function calculate(){

}
render()





