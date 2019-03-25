var cards = [
{
    icon: "instagram",
    img: "img/iconfinder_nature-18_2814514.png"
},
{
    icon: "instagram",
    img: "img/iconfinder_nature-18_2814514.png"
},
{
    icon: "google",
    img: "img/iconfinder_nature-20_2814519.png"
},
{
    icon: "google",
    img: "img/iconfinder_nature-20_2814519.png"
},
{
    icon: "line",
    img: "img/iconfinder_nature-22_2814513.png"
},
{
    icon: "line",
    img: "img/iconfinder_nature-22_2814513.png"
},
{
    icon: "skype",
    img: "img/iconfinder_nature-23_2814520.png"
},
{
    icon: "skype",
    img: "img/iconfinder_nature-23_2814520.png"
},
{
    icon: "youtube",
    img: "img/iconfinder_nature-24_2814518.png"
},
{
    icon: "youtube",
    img: "img/iconfinder_nature-24_2814518.png"
},
{
    icon: "whatsup",
    img: "img/iconfinder_nature-26_2814517.png"
},
{
    icon: "whatsup",
    img: "img/iconfinder_nature-26_2814517.png"
},
{
    icon: "fb",
    img: "img/iconfinder_nature-27_2814521.png"
},
{
    icon: "fb",
    img: "img/iconfinder_nature-27_2814521.png"
},
{
    icon: "twitter",
    img: "img/iconfinder_nature-25_2814516.png"
},
{
    icon: "twitter",
    img: "img/iconfinder_nature-25_2814516.png"
}
];


var createBoard = function() {
    var gameBoard = document.createElement("table");
    for (i = 0; i < 4; i++) {
        var row = document.createElement("tr");
         for (j = 0; j < 4; j++) {
             var tile = document.createElement("td");
             var frontImg = document.createElement("img");
             frontImg.setAttribute("src", "img/iconfinder_icon-plus-square_2867933.png");
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
    var dataId = images[i].setAttribute("data-id", i);
}


//Create start button
var startButton = document.createElement("button");
startButton.innerHTML = "START";
document.body.appendChild(startButton);



var firstCard;
var secondCard;



var imgElement = document.querySelectorAll("img");
 for (i = 0; i < imgElement.length; i++) {
    imgElement[i].addEventListener("click", function() {
          var cardId = this.getAttribute("data-id");
          this.setAttribute("src", cards[cardId].img);
         hasFlipped.push(cards[cardId]);
         if (hasFlipped.length === 2) {
             checkMatch();
         }
       });
 }

//Check for match
var hasFlipped = [];
var checkMatch = function() {
    if (hasFlipped[0] === hasFlipped[1]) {
        console.log("you win");
    } else {
        console.log("you lose");
    }
}







// var flipCard = function() {
//      var cardId = this.getAttribute("data-id");
//      this.setAttribute("scr", cards[cardId].icon);
//      hasFlipped.push(cards[cardId].icon);
//      console.log(imaId);

// };


// flipCard();


// var cards = document.getElementsByTagName("td");

// var hasFlippedCard = false;
// var firstCard;
// var secondCard;

// for (i = 0; i < cards.length; i++) {
//         cards[i].addEventListener("click", function(event) {
//             if (!hasFlippedCard) {
//                 hasFlippedCard = true;
//                 // var newimage = document.createElement("img");
//                 this.innerHTML =
//                 firstCard = this;
//             } else {
//                 hasFlippedCard = false;
//                 secondCard = this;
//             }
//             // if (firstCard.dataset.img === secondCard.dataset.img) {
//             //         console.log("match");
//             //     } else {
//             //         console.log("not match");
//             //     }

// });
// }