function startgame() {
    for(let i=1;i<=9;i=i+1) {
        clearBox(i);
    };
    document.turn = "X";
    if(Math.random() > 0.5) 
    {
         document.turn = "O";
    }//else {
    //     document.turn = "X";
    //  }
    document.winner = null;
    setMessage(document.turn+ " " + "Get to start.");
    document.getElementById("s1").style.color = "#3FC80E";
    document.getElementById("s2").style.color = "#3FC80E";
    document.getElementById("s3").style.color = "#3FC80E";
    document.getElementById("s4").style.color = "#3FC80E";
    document.getElementById("s5").style.color = "#3FC80E";
    document.getElementById("s6").style.color = "#3FC80E";
    document.getElementById("s7").style.color = "#3FC80E";
    document.getElementById("s8").style.color = "#3FC80E";
    document.getElementById("s9").style.color = "#3FC80E";
}
function setMessage (msg) {
    document.getElementById("message").textContent = msg;
}
function nextMove(square) {
    if (document.winner != null)
    {
         setMessage(document.winner+" " + "Already won the game!")
    }
    else if ( square.textContent == " ")
     {
        square.textContent  = document.turn;
        switchturn();
    }else {
        setMessage("That square is already used.")
    }
}
function switchturn() {
    if(checkforWinner(document.turn))
    {
        setMessage("Congratulation"+ " " + document.turn + "!You won the game.")
        document.winner = document.turn;
    }
    
    
    else if(document.turn == "X") {
         document.turn = "O";
        setMessage(`It's ${document.turn}'s turn.`);
    }else if(document.turn == "O") {
         document.turn = "X";
        setMessage(`It's ${document.turn}'s turn.`)
    } else{
        setMessage("It's black luck ... its tie!!");
    }
}function checkforWinner(move) {

    let result = false;
    if(checkRow(1,2,3,move)|| checkRow(4,5,6,move) || checkRow(7,8,9,move)|| checkRow(1,4,7,move) || checkRow(2,5,8,move) || checkRow(3,6,9,move) || checkRow(1,5,9,move) || checkRow(3,5,9,move))
    {
        result = true;
    }
    return result;
}
function checkRow(a,b,c,move) 
{
    let result = false;
    if (getbox(a) == move && getbox(b)== move && getbox(c) == move) 
    {
        result = true;
    }
    return result;
}
function getbox(number) {
    return document.getElementById("s" + number).textContent;
}
function clearBox(number) {
    document.getElementById("s"+ number).textContent = " ";
}
function CheckforTie() {
    if(checkRow(1,2,3,move)|| checkRow(4,5,6,move) || checkRow(7,8,9,move)|| checkRow(1,4,7,move) || checkRow(2,5,8,move) || checkRow(3,6,9,move) || checkRow(1,5,9,move) || checkRow(3,5,9,move) != document.turn )
    // for (i=1;i<=9;i++) {
    //     if(getbox(1) == "") 
        {
            return false;
        }
    return true;
    // }
}