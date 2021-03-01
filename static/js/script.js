//This corresponds the challenge 1 programming

function ageInDays()
{
    var birthYear = prompt("In what year were you born? ");
    var getAgeInDays = (2021 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + getAgeInDays + " days old");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}
function reset()
{
   document.getElementById("ageInDays").remove(); 
}
//Chalenge 2: Cat Generator
function generateCat()
{
    var image = document.createElement("img");
    var div = document.getElementById("cat-meme");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}
