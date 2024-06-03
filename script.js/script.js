const board = document.getElementById("board")
const timerDisplay= document.getElementById('timer')
const resetButton = document.getElementById('reset')
const pauseButton = document.getElementById('pause')
const resumeButton = document.getElementById('resume')

let gameTimer;
let timeleft=60;
let isPaused= false;

const initialBoardsetup=[
    ['R','Ta','R','R','R','R','C','R'],
    ['T','','','','','','','T'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','','',],
    ['','','','','','','',''],
    ['T','','','','','','','T'],
    ['R','Ta','R','R','R','R','C','R'],
];
const pieceTypes={
    'T':'Titan',
    'C':'Cannon',
    'R':'Ricohet',
    'Ta':'Tank',
};
function createBoard(){
    board.innerHTML='';
    for(let row=0;row<8;row++){
        for(let col=0;col<8;col++){
            const tile=document.createElement('div');
            tile.classList.add('title');
            DataTransferItemList.dataset.row=row;
            DataTransferItemList.dataset.col=col;

            const piece=initalBoardSetup[row][col];
            if (piece){
                DataTransferItemList.innerText=pieceTypes [piece];
                DataTransferItemList.dataset.piece=piece;
            }
            board.appendChild(title);
        }
    }
}
function startTimer(){
    gameTimer=setInterval(()=>{
        if(!isPaused){
            timeLeft--;
            timerDisplay.innerText=Time; {timeleft};
            if(timeleft==0){
                clearInterval(gameTimer);
                alert("Time is up!You lost!!!");
            }
            
        }
        
    },1000);
}
function resetGame(){
    clearInterval(gameTimer);
    timeleft=60;
    timerDisplay.innerText=Time;{timeleft};
    createBoard();
    startTimer();
}
function pauseGame(){
    isPaused=true;
}
function resumeGame(){
    isPaused=false;
}
resetButton.addEventListener("click",resetGame);
resetButton.addEventListener('click',pauseGame);
resumeButton.addEventListener('click',resumeGame);

createBoard();
startTimer();