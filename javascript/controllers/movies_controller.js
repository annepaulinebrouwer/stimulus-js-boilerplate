import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["input", "results"]
  static values = {
    baseUrl: String
  }

  fetchMovies(query) {
    fetch(`${this.baseUrlValue}/?s=${query}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then(data => this.insertMovies(data))
  }

  insertMovies(data) {
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-group-item border-0">
        <img src="${result.Poster}" alt="" width="100" height="100%">
      </li>`
      this.resultsTarget.insertAdjacentHTML("beforeend", movieTag)
    })
  }

  search(event) {
    event.preventDefault()
    this.resultsTarget.innerHTML = ""
    this.fetchMovies(this.inputTarget.value)
  }
}
