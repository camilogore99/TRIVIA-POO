//==== AQUI VAN TODOS LOS INNER HTML ======//
export default class UI {
      static printQuestions(question)  {
            const buttonQues = document.getElementById("button-question");
            const questionContainer = document.getElementById("questions-container")
            let html1 = ``;
            question.forEach((question,index) =>{
                  html1 += `<div class="col-md-12 center mt-3">
                                 <div class="card backgro h-100">
                                        <div class="card-body style">
                                             ${question.question}
                                             ${this.printAnswer(question.correct_answer,question.incorrect_answers[0],question.incorrect_answers[1],question.incorrect_answers[2],index)}
                                      </div>
                              </div>
                         </div>` ;
            })
            //========== GENERAR EL BOTON PARA ENVIAR LAS RESPUESTAS ============
            let html2 = `<button type="submit" onclick='getAswer()' id="button" class="btn btn-primary mt-3 center22" >Enviar Respuestas </button>`;
            buttonQues.innerHTML = html2;
            questionContainer.innerHTML = html1;

      }
      static printCategory(categor) {
            let categorie = document.getElementById("categories");
            categor.forEach((category) => {
                  categorie.innerHTML += `<option value="${category.id}">${category.name}</option>`;
            });
      };
      static printAnswer(correct,incorrect1,incorrect2,incorrect3,index){
            const questionContainer = document.getElementById("questions-container")
            let typequestion = document.getElementById("select-type").value;
            let answers = [];
            let correctAnswer = correct;           
            answers.push(incorrect1,incorrect2,incorrect3);
            let html3 = ``;
            answers.splice(Math.floor(Math.random() * (answers.length)), 0, correctAnswer)
            for (let i = 0; i < answers.length; i++) {
                  if (typequestion ==="multiple") {
                       html3 += `<div class="form-check col-md-9">
                                            <input  class="form-check-input" value='${answers[i]}' type="radio" name='${correct}' id='${answers[i]}'>
                                           <label class="form-check-label" for='${answers[i]}'>
                                            ${answers[i]}
                                           </label>
                                        </div>`;
                  } else {
                        
                         html3 += `<div class="form-check">
                                      <input required class="form-check-input" value='False' type="radio" name='${index+1}' id='${index+10}'>
                                       <label class="form-check-label" for='${index+10}'>
                                          ${answers[0]}
                                       </label>
                                    </div>
                                    <div class="form-check">
                                      <input required class="form-check-input" value='True' type="radio" name='${index+1}' id='${index+1}'>
                                       <label class="form-check-label" for='${index+1}'>
                                           ${answers[1]}
                                       </label>
                                    </div>
                                     `;
                  }
            }
            return html3;
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