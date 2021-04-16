// Questions Objesi

function Question(text, choice, answer) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;
}

// CheckAnswer Fonksiyonu

Question.prototype.checkAnswer = function (answer) {
    return answer === this.answer;
}


// Quiz Constructur

function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}
// Quiz Methods
Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}
Quiz.prototype.isFinish = function () {
    if (this.questions.length == this.questionIndex) {
        return true;
    }
    return false;
}
Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();

    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

// variables

var q1 = new Question("CSS in Açılımı Nedir ? ", ["Cascading Styles Sheet", " Cascoding Styles Sheets", " Cascoding Stylee Sheeets", "Cascading Style Sheets"], "Cascading Style Sheets");
var q2 = new Question("Font Kalınlaştırmak İçin Hangi Css Özelliği Kullanılır.", ["fontWeight='red'", "font-weight=600", "border:1px solid #000;", "margin-left:2px;"], "font-weight=600");
var q3 = new Question("CSS'de Hizlama İşlemleri İçin Hangisi Kullanılır ? ", ["float", "margin", "text", "font-weight"], "float");
var q4 = new Question("Harici Css Dosyası Nereye eklenir", ["head tagleri arasına", "local olarak", "body tagleri arasına", "Hiçbiri"], "head tagleri arasına");
var q5 = new Question("Hangisi Doğru Bir Kullanımdır ? ", ['text-align="center"', 'textalign="centered"', "centered", "align=center"],'text-align="center"');
var q6 = new Question("CSS de Yorum Satırları İçin Hangisi Kullanılır ? ", ["//", "*/#", "#", "/* */"], "/* */");
var q7 = new Question("display:block Ne İşe Yarar? ", ["Nesneye Block Elemente Çevirerek Tüm Satırı Kaplar", "Nesneyi ortaya Hizalar", "Nesneye Gölgelendirme Verir", "Nesneyi Sağa Hizalı Bir Block Eleman Yapar"], "Nesneye Block Elemente Çevirerek Tüm Satırı Kaplar");
var q8 = new Question("Hangisi Popüler Bir CSS/Js Kütüphanesidir ? ", ["Bootstrap 4", "Laravel", "PHP", "NodeJS"], "Bootstrap 4");
var q9 = new Question("Düzensiz listelerin elementlerinin başındaki simge nasıl kaldırılır ? ", ["ul{list-style:none}", "ol{list-style:none}", "ul li a {text-style=none}", "a:centered"], "ul{list-style:none}");
var q10 = new Question("Hover Nedir ? ", ["Nesneye Tıklanma Durumudur", "Nesneye Çift Tıklama Durumudur", "Nesneyi Gizleme Durumudur", "Nesnenin Üzerine Gelinme Durumudur"], "Nesnenin Üzerine Gelinme Durumudur");

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var quiz = new Quiz(questions);

loadQuestion();
function loadQuestion() {
    if (quiz.isFinish()) {
        showScore();
    }
    else {
        var question = quiz.getQuestion();
        var choices = question.choice;
        var questionHTML = document.querySelector("#questions");
        questionHTML.innerHTML = question.text;

        for (var i = 0; i < choices.length; i++) {
            var element = document.querySelector("#choiceX" + i);
            element.innerHTML = choices[i];
            guess("choiceV" + i, choices[i]);
        }
        description();
    }
}

function guess(id, guess) {
    var btn = document.querySelector("#" + id);
    btn.onclick = function () {
        quiz.guess(guess);
        loadQuestion();
    }
}

function showScore() {
    if (quiz.questionIndex == quiz.questions.length) {
        var showTotal = document.querySelector(".card-body");
        showTotal.innerHTML = `<p>Test Bitti</p><h2>Toplam Skorunuz ${quiz.score}</h2>`;
        btnNext.style.display = "none";
    }
}

function description() {
    var lastText = document.getElementById("lastText");
    lastText.innerHTML = `Sorular ${quiz.questionIndex + 1} - ${quiz.questions.length}`;
}

var btnNext = document.getElementById("next");
btnNext.addEventListener('click', function (e) {
    e.preventDefault();
    quiz.questionIndex++;
    if (quiz.questionIndex >= (quiz.questions.length - 1)) {
        btnNext.style.display = "none";
    }
    loadQuestion();
});


