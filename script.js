var cards = [
{
    icon: "rocket",
    img: "img/rocket.png"
},
{
    icon: "rocket",
    img: "img/rocket.png"
},
{
    icon: "alien",
    img: "img/alien.png"
},
{
    icon: "alien",
    img: "img/alien.png"
},
{
    icon: "drop",
    img: "img/drop.png"
},
{
    icon: "drop",
    img: "img/drop.png"
},
{
    icon: "thunderstorm",
    img: "img/thunderstorm.png"
},
{
    icon: "thunderstorm",
    img: "img/thunderstorm.png"
},
{
    icon: "moon",
    img: "img/moon.png"
},
{

    icon: "moon",
    img: "img/moon.png"
},
{
    icon: "octocat",
    img: "img/octocat.png"
},
{
    icon: "octocat",
    img: "img/octocat.png"
},
{
    icon: "eye",
    img: "img/eye.png"
},
{
    icon: "eye",
    img: "img/eye.png"
},
{
    icon: "thunder",
    img: "img/thunder.png"
},
{
    icon: "thunder",
    img: "img/thunder.png"
}
];




//create UI board
var createBoard = function() {
    var gameBoard = document.createElement("table");
    for (i = 0; i < 4; i++) {
        var row = document.createElement("tr");
         for (j = 0; j < 4; j++) {
             var tile = document.createElement("td");
             var frontImg = document.createElement("img");
             frontImg.setAttribute("src", "img/icons8-social-octopus-512.png");
             tile.appendChild(frontImg);
            row.appendChild(tile);
        }
        gameBoard.appendChild(row);
     }
     document.body.appendChild(gameBoard);
}
createBoard();





//Adding data-id with numbers
var images = document.querySelectorAll("img");
for (i = 0; i < images.length; i++) {
    var setDataId = images[i].setAttribute("data-id", i);
}



//create a div for telling who is current player
//  for (i = 0; i < 2; i++) {
//     var playerPrompt = document.createElement("div");
//     playerPrompt.className = "player-prompt" + i;
//     document.body.appendChild(playerPrompt);
// }




//shuffling the cards
function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
}
shuffleArray(cards);





//flip card after click
var playerTurn = false;
var hasFlipped = [];
var imgElement = document.querySelectorAll("img");


 for (i = 0; i < imgElement.length; i++) {
    imgElement[i].addEventListener("click", function() {
        if (!playerTurn) {
            console.log("its player 1");
            this.setAttribute("src", cards[this.dataset.id].img);

            hasFlipped.push(this);

          if (hasFlipped.length === 2) {
            playerTurn = true;
            if (hasFlipped[0].src === hasFlipped[1].src) {
                matched(hasFlipped[0], hasFlipped[1]);
            } else if (hasFlipped[0].src !== hasFlipped[1].src) {
                unmatched(hasFlipped[0], hasFlipped[1]);
            }
          }


      } else  if (playerTurn = true) {
        console.log("its player 2")
        this.setAttribute("src", cards[this.dataset.id].img);

         hasFlipped.push(this);

          if (hasFlipped.length === 2) {
            playerTurn = false;
            if (hasFlipped[0].src === hasFlipped[1].src) {
                matched(hasFlipped[0], hasFlipped[1]);
                console.log("im player" + score);
            } else if (hasFlipped[0].src !== hasFlipped[1].src) {
                unmatched(hasFlipped[0], hasFlipped[1]);
            }
          }
      }
        });
 }




//remain the cards after found match
function matched(image1, image2){
    hasFlipped = [];
}


//flip back to the default image if the cards doesn't match
function unmatched(image1, image2){
    hasFlipped = [];
    setTimeout(function() {
    image1.setAttribute("src", "img/icons8-social-octopus-512.png");
    image2.setAttribute("src", "img/icons8-social-octopus-512.png"); }, 800);
}