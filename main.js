//=============================================//
//== git push de lo que hagas ====// <=paso 1
//==== git checkout main ==//<=paso 2
//==== git pull =====//<=paso 3
//====git merge tu rama ===//<=paso 4
//==== git push main ===//<=paso 5
//====git checkout y tu rama ===//<=paso6

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

xxxxxxxxxxxxxxxxxxxxx


xxxxxxxxxxxxxxxxxxxxxxx
Request.getCategory()
          .then(response => response.json())
          .then(data => UI.printCategory(data.trivia_categories))
          //console.log(Request.getCategory)

xxxxxxxxxxxxxxxxxxx

