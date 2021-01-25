let Correct =[];
let selected = [];
export default class Validation {
      static correct(correct) {
            for (let i = 0; i < correct.length; i++) {
                  Correct.push(correct[i].correct_answer)
            }
            return Correct
      }
      static responseCheck () {
            let contquestion = 0;
            let inputs = document.querySelectorAll("input");
             inputs.forEach((input) => {
                if (input.checked) {
                  selected.push(input.value);
               }
            });
            console.log(selected)

            for (let i = 0; i < Correct.length; i++) {
                  if (selected[i] === Correct[i]) {
                        contquestion += 1;
                  }
     }

            this.required(contquestion);
      };
      static required (contquestion) {

            let correctas = [];
            let inputSelect = document.querySelectorAll("input");
            inputSelect.forEach((input) => {
                 if (input.checked) {
                  correctas.push(input.checked);
                 }
            });
           if (correctas.length === Correct.length) {
                 this.validationResponse(contquestion);
           }else {
                 alert("responde todas las preguntas ")
           }
      }
      static validationResponse(contquestion) {
            let printCard = document.getElementById("card-result");
            let html = ``;
            html += `<div class="result-card">
                         <div class="row justify-content-center hola">
                             <div class="col-md-5 center ">
                                <div class="card" style="width: 18rem;">
                                      <div class="card-body">
                                           <h2 class="card-title">TU RESULTADO </h5>
                                           <h4 class="card-subtitle mb-2 text-muted">Tu Porcentaje Es= ${(100*(contquestion)/selected.length)}%</h6>
                                           <p class="card-text ">total =${contquestion}${"/"}${Correct.length}</p>
                                           <button id="reset" type="submit" class="btn btn-primary">volver a jugar</button>
                                      </div>
                                </div>
                          </div>
                      </div>
                  </div>`;
                  printCard.innerHTML = html
                  return html
      }
}