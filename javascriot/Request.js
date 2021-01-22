export default class Request {
      static getCategory () {
            return fetch(`https://opentdb.com/api_category.php`)
      }
      static getValue() {
        const totalQuestions = document.getElementById('total-quiestion').value;
        const category = document.getElementById('categories').value;
        const difficulty = document.getElementById('difficulty').value;
        const type = document.getElementById('select-type').value;
        return [totalQuestions, category, difficulty, type];
    }
    static getQuestions() {
        const [amount, category, difficulty, type] = this.getValue();
        return fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
    }
}


