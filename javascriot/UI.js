//==== AQUI VAN TODOS LOS INNER HTML ======//
export default class UI {
      static printQuestions(question)  {
            const buttonQues = document.getElementById("button-question");
            const questionContainer = document.getElementById("questions-container")
            let html1 = ``;
            question.forEach(question =>{
                  html1 += `<div class="col-md-8 center mt-3">
                                 <div class="card backgro h-100">
                                        <div class="card-body">
                                             ${question.question}
                                             ${this.printAnswer(question.correct_answer,question.incorrect_answers[0],question.incorrect_answers[1],question.incorrect_answers[2],index)}
                                      </div>
                              </div>
                         </div>` ;
            })
            //========== GENERAR EL BOTON PARA ENVIAR LAS RESPUESTAS ============
            let html2 = `<button type="submit" onclick='getAswer()' id="button" class="btn btn-primary mt-3" >Enviar Respuestas </button>`;
            buttonQues.innerHTML = html2;
            questionContainer.innerHTML = html1;

      }
      static printCategory(categor) {
            let categorie = document.getElementById("categories");
            categor.forEach((category) => {
                  categorie.innerHTML += `<option value="${category.id}">${category.name}</option>`;
            });
      };
      //====== ESTA PARTE ES DE JULIO ========//
      static printAnswer(question){
          holllllllllllllllllllllllllllllllllllll  
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