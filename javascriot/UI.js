//==== AQUI VAN TODOS LOS INNER HTML ======//
import validation from '../validation.js'
export default class UI {
      static printQuestions(question)  {
            const buttonQues = document.getElementById("button-question");
            const buttonQues2 = document.getElementById("button-2");
            const questionContainer = document.getElementById("questions-container")
            let html1 = ``;
            question.forEach((question,index) =>{
                  html1 += `<div class="col-md-7 center mt-1">
                                 <div class="card backgro h-100">
                                        <div class="card-body style">
                                             ${question.question}
                                             ${this.printAnswer(question.correct_answer,question.incorrect_answers[0],question.incorrect_answers[1],question.incorrect_answers[2],index)}
                                      </div>
                              </div>
                         </div>` ;
            })
            //========== GENERAR EL BOTON PARA ENVIAR LAS RESPUESTAS ============
            let html2 = `<button type="submit" id="button" class="btn btn-primary mt-3 center22" >Enviar Respuestas </button>`;
            buttonQues2.innerHTML= html2;
            questionContainer.innerHTML = html1;

      }
      static printCategory(categor) {
            let categorie = document.getElementById("categories");
            categor.forEach((category) => {
                  categorie.innerHTML += `<option value="${category.id}">${category.name}</option>`;
            });
      };
      //====== ESTA LISTO LA GENERACION DE PREGUNTAS ========//

      static printAnswer(correct,incorrect1,incorrect2,incorrect3,index){
            let typequestion = document.getElementById("select-type").value;
            let response = [correct,incorrect1,incorrect2,incorrect3]
            let answers = [];
            let correctAnswer = correct; 
            let incorrect = incorrect1          
            answers.push(incorrect1,incorrect2,incorrect3);
            let html3 = ``;
            answers.splice(Math.floor(Math.random() * (answers.length)), 0, correctAnswer)
            for (let i = 0; i < answers.length; i++) {
                  if (typequestion ==="multiple") {
                       html3 += `<div class="form-check col-md-9">
                                            <input  class="form-check-input" value='${answers[i]}' type="radio" name='${correct}' id='${response[i]}'>
                                           <label class="form-check-label" for='${response[i]}'>
                                            ${answers[i]}
                                           </label>
                                        </div>`;
                                        
                                        
                  } else {
                       return this.responsetru(correct,incorrect,index)              
                  }
            }
            return html3;
      }
      static responsetru (response1, response2,index) {
            let arrayResponse = []
            arrayResponse.push(response1,response2)
            let html3 = ``;
                  html3 += `<div class="form-check">
                                      <input required class="form-check-input" value='False' type="radio" name='${index+1}' id='${index+10}'>
                                       <label class="form-check-label" for='${index+10}'>
                                          ${arrayResponse[0]}
                                       </label>
                                    </div>
                                    <div class="form-check">
                                      <input required class="form-check-input" value='False' type="radio" name='${index+1}' id='${index+1}'>
                                       <label class="form-check-label" for='${index+1}'>
                                          ${arrayResponse[1]}
                                       </label>
                                    </div>
                                     `;
            
            return html3
      }
      
     static printerror(){
        const container = document.getElementById('questions-container');
        container.innerHTML = '';
        let html = `
        <div class="container mt-5">
            <div row justify-content-center>
                    <div class="card h-100">
                        <div id="this-card" class="card-body"> 
                        <h2 class="text-center">no tenemos suficientes preguntas </h2>
                        </div>
                    </div>
            </div>    
        </div>
        `;
        return container.innerHTML = html
    }
};

const form = document.querySelector('#button-2');
form.addEventListener('submit', (event) =>{
      event.preventDefault();
      validation.responseCheck();
});
