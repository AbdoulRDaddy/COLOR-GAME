const squares =document.querySelectorAll('.square');
const answerDisplay = document.querySelector('.correct');
const colorDisplay = document.querySelector('.RGB');
const btnHard = document.querySelector(".hard")
const btnEasy = document.querySelector(".easy")
let colors = [];
let mode = "Hard";
GenerateRandomColor();
assign_colors();
checkColor();
function jeuHard(){
mode = "Hard"
squares[4].style.visibility="visible"
squares[5].style.visibility="visible"
reset()
}
function jeuEasy(){
mode = "Easy"
console.log(squares);
squares[4].style.visibility="hidden"
squares[5].style.visibility="hidden"
reset()
}
function GenerateRandomColor() {
    if (mode === "Hard") {
        btnHard.classList.add("rouge")
        btnEasy.classList.remove("rouge")
        for (let i = 0; i < squares.length; i++) {
            colors.push(
                `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
            );         
        }
    }
    else{
        btnHard.classList.remove("rouge")
        btnEasy.classList.add("rouge")
        for (let i = 0; i < 4; i++) {
            colors.push(
                `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
            );         
        }
    }
   
}
function assign_colors() {
        colors.forEach((color,index) => {
            squares[index].style.background = color
            squares[index].setAttribute('data-color', color)
        })
}

function getRandomPickedColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = randomColor;
    return randomColor;
}
function checkColor() {
    
        if (mode === "Hard") {
            squares.forEach(square =>{
            square.addEventListener('click', e => {
                if (e.target.dataset.color === pickedColor) {
                    answerDisplay.textContent = 'Good Check';
                    squares.forEach(square=>{
                        square.classList.remove("fade")
                        square.style.background = pickedColor
                    })
                } else {
                    answerDisplay.textContent = 'Bad Check';
                    e.target.classList.add('fade');
                }
            })
        })
            
        }else{
            for (let i = 0; i < 4; i++) {
                squares[i].addEventListener("click",e=>{
                    if (e.target.dataset.color === pickedColor) {
                        answerDisplay.textContent = 'Good Check';
                        squares.forEach(square=>{
                            square.classList.remove("fade")
                            square.style.background = pickedColor
                        })
                    } else {
                        answerDisplay.textContent = 'Bad Check';
                        e.target.classList.add('fade');
                    }
                })
                
            }
        }
  
   
}
let pickedColor = getRandomPickedColor();
function reset() {
    colors = [];
    GenerateRandomColor();
    squares.forEach((square) => square.classList.remove("fade"));
    assign_colors();
    checkColor();
    pickedColor = getRandomPickedColor();
}