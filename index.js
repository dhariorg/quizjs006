const correctAnswer = ["D", "C", "A", "A"];
const form = document.querySelector(".quiz-form");
const result=document.querySelector(".result");
const questions = document.querySelectorAll('.question');
function OnclickTryagain(event){
    result.classList.add('hide');
    questions.forEach((question, index)=>{
        console.log(question.classList);
        
            question.classList.remove('right')
            question.classList.remove('wrong');
        

    });

}

form.addEventListener("submit", event => {
    event.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 1;
            questions[index].classList.add('right');
        }else{
            questions[index].classList.add('wrong');
        }
    });
    scrollTo(0,0);
    result.classList.remove('hide');
    result.querySelector("p").textContent= `you scored ${score} out of 4`;
    console.log(score);
});