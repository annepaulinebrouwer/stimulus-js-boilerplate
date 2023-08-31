import { Controller } from "stimulus";


export default class extends Controller {
  connect(){
    console.log("Hello")
  }

  disable(){
    console.log("Disable button pressed")
    this.element.innerText = "Bingo"
    this.element.setAttribute("disabled", " ")
  }
}
