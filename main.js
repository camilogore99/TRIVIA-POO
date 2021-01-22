import Request from './javascriot/Request.js'
import UI from './javascriot/UI.js'
let correct = [];

const form = document.querySelector('#form-question');
form.addEventListener('submit', (event) =>{
      event.preventDefault()
      Request.getQuestions()
               .then(response =>response.json())
               .then(data => {
                     if (data.results.length > 0) { 
                UI.printQuestions(data.results)
            } else {
                UI.printerror()
            }
               })
});
xxxxxxxxxxxxxxxxxxxxxxx
Request.getCategory()
          .then(response => response.json())
          .then(data => UI.printCategory(data.trivia_categories))
          //console.log(Request.getCategory)

xxxxxxxxxxxxxxxxxxx