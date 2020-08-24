function factorial() {
    var inputNumber = prompt("enter number ");
    var result = 5* 4 * 3 * 2 *1;
    var textAnswer = document.createTextNode(' Factorial of ' + inputNumber + ' is : ' + result);

    var h1 = document.createElement('hi');
    h1.setAttribute('id','result');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(result);
}

function reset(){
    document.getElementById('flex-box-result').remove();
}

function apiGenerator(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-api-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=jpg&size=small"
    div.append(image);
}

function flexboxSelector(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numbertoChoice(randomInt());
    console.log(botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    result = finalMessage(results[0], results[1]);
    console.log(result);
    flexboxSelectorFrontend(humanChoice, botChoice, result);
}

function randomInt(){
    return Math.floor(Math.random() * 3);
}

function numbertoChoice(randomNumber){
    return ['paper', 'books', 'wood'][randomNumber];
}

function  decideWinner(yourChoice, botChoice){
    var gameDatabasse = {
        'paper' : {'books': 1,'wood': 0.5,'paper': 0.5},
        'books' : {'books': 0.5,'wood': 1,'paper': 0.5},
        'wood' : {'books': 1,'wood': 0.5,'paper': 1},
    };
    return [gameDatabasse[yourChoice][botChoice], gameDatabasse[botChoice][yourChoice]];
}

function finalMessage(yourScore, botScore){
    if(yourScore == 0){
        return {'message': 'selected different image', 'color' : 'red'};
    }
    else if(yourScore == 0.5){
        return {'message': 'selected same image', 'color' : 'yellow'};
    }
    else{
        return {'message': 'selected correct image', 'color' : 'green'};
    }
}

function refresh(){

    location.reload(true);

}

function flexboxSelectorFrontend(yourChoiceImage, botChoiceImage, finalMessage){
    var imageDatabase = {
        'paper' : document.getElementById('paper').src,
        'books' : document.getElementById('books').src,
        'wood'  : document.getElementById('wood').src
    }

    document.getElementById('paper').remove();
    document.getElementById('books').remove();
    document.getElementById('wood').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    

    humanDiv.innerHTML = "<img src='" + imageDatabase[yourChoiceImage] + "' height=180 width=120" + ">";
    botDiv.innerHTML = "<img src='" + imageDatabase[botChoiceImage] + "' height=180 width=120"+ ">";
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:30px; padding:30px; '>" + finalMessage['message'] + "<button class= 'btn btn-primary' onclick='refresh()'" + ">refresh";
    

    console.log(humanDiv.innerHTML);
    console.log(botDiv.innerHTML);
    console.log(messageDiv.innerHTML);


    document.getElementById('flex-box-container-3-div').appendChild(humanDiv);
    document.getElementById('flex-box-container-3-div').appendChild(messageDiv);
    document.getElementById('flex-box-container-3-div').appendChild(botDiv);

}