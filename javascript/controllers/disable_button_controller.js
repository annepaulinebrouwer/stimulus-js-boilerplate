import { Controller } from "stimulus";


export default class extends Controller {
  static targets = ["button", "link"]

  connect(){
    console.log("Hello")
    console.log("link", this.linkTarget)
  }

  disable(){
    console.log("Disable button pressed")
    this.buttonTarget.innerText = "Bingo"
    this.buttonTarget.setAttribute("disabled", " ")
    this.linkTarget.classList.remove('d-none')
  }

  reset(){
    this.buttonTarget.innerText = "Click me!"
    this.buttonTarget.removeAttribute("disabled")
    this.linkTarget.classList.add('d-none')
  }
}
