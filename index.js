let num = 0
const input = document.getElementById("input")
const btn = document.getElementById("btn")
let meter = 0
const feet = 0
const kilo = 0
const pound = 0
const liter = 0
const gallon = 0

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
    let meter =  3.28084
    const feet = 0.3048
    const kilo = 2.20462
    const pound = 0.453592
    const liter = 0.264172
    const gallon = 3.78541
   
     lengthString = `${num} Meters = ${(num * meter.toFixed(3))} Feet | ${num} Feet = ${(num * feet.toFixed(3))} Meters`
     volumeString = `${num} Liters = ${num * liter.toFixed(3)} Gallon | ${num} Gallons = ${(num * gallon.toFixed(3))} Liters`
    kiloString = `${num} Kilos = ${(num * kilo.toFixed(3))} Pounds | ${num} Pounds = ${(num * pound.toFixed(3))} Kilos`
     massEl.textContent = kiloString
     lenEl.textContent = lengthString
     volEl.textContent = volumeString
     
     console.log(kiloString)

})


render()





