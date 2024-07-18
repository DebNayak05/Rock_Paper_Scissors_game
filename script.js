function getComputerChoice(choices)
{
    num = Math.floor(Math.random()*3);
    return choices[num];
}

function getHumanChoice()
{
    HumanChoice = prompt("Please enter what you would like to play ?\nIt can be ->\nRock\nPaper\nScissors");
    if (HumanChoice === "Rock" || HumanChoice === "Paper" || HumanChoice === "Scissors")
    {
        return HumanChoice;
    }
    alert("Invalid choice entered.\nStarting choice selection again.\n");
    HumanChoice = getHumanChoice();
    return HumanChoice;
}

function playRound(scores)
{
    choices = ["Rock", "Paper", "Scissors"];
    computerChoice = getComputerChoice(choices);
    HumanChoice = getHumanChoice();
    if (HumanChoice === "Rock")
    {
        if (computerChoice === "Paper")
        {
            alert("The computer won the round !");
            scores.computerScore++;
        }
        else if (computerChoice === "Scissors")
        {
            alert("You won the round !!!");
            scores.humanScore++;
        }
        else
        {
            alert("This round was a tie");
        }
    }
    else if (HumanChoice === "Scissors")
    {
        if (computerChoice === "Rock")
        {
            alert("The computer won the round !");
            scores.computerScore++;
        }
        else if (computerChoice === "Paper")
        {
            alert("You won the round !!!");
            scores.humanScore++;
        }
        else
        {
            alert("This round was a tie");
        }
    }
    else
    {
        if (computerChoice === "Scissors")
        {
            alert("The computer won the round !");
            scores.computerScore++;
        }
        else if (computerChoice === "Rock")
        {
            alert("You won the round !!!");
            scores.humanScore++;
        }
        else
        {
            alert("This round was a tie");
        }
    }
}

function playGame()
{
    let scores = {
        humanScore : 0,
        computerScore : 0
    }
    for (let i = 0; i<5; i++)
    {
        playRound(scores);
        alert("Human Score :"+scores.humanScore + "\nComputer Score :"+scores.computerScore+"\n");
    }
    if (scores.humanScore > scores.computerScore)
    {
        alert("Congratulations !!!!\nYou won the game");
    }
    else if (scores.humanScore === scores.computerScore)
    {
        alert("The game was a tie");
    }
    else
    {
        alert("Sorry, you lost the game :(");
    }
}

playGame();