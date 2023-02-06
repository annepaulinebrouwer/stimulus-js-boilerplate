import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
window.Stimulus = Application.start()

import HelloController from "./controllers/hello_controller.js"
Stimulus.register("hello", HelloController)
