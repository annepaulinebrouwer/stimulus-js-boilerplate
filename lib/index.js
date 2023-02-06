import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
window.Stimulus = Application.start()

const button = document.querySelector("#click-me")
button.addEventListener("click", (event) => {
  console.log(event)
})
