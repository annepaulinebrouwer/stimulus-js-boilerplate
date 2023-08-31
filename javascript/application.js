import { Application, Controller } from 'stimulus';
import DisableButtonController from './controllers/disable_button_controller.js'

window.Stimulus = Application.start()
Stimulus.register("disable-button", DisableButtonController)


// // by class
// const button = document.querySelector('.btn')
// console.log(button)
// const element1 = document.getElementsByClassName('btn')[0]
// console.log(element1)

// // by id
// const element2 = document.querySelector('#click-me')
// console.log(element2)
// const element3 = document.getElementById('click-me')
// console.log(element3)

// // Vanilla JavaScript

// // anonymous function
// button.addEventListener("click", (element) => {
//   console.log("I was clicked")
// })

// // named function
// const buttonClickAction =  (event) => {
//   event.currentTarget.classList.remove('btn-primary')
//   event.currentTarget.innerText = "Bingo!"
// }
// button.addEventListener("click", buttonClickAction)
