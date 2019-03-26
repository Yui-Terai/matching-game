var cards = [
{
    icon: "cherry-blossom",
    img: "img/cherry-blossom.png"
},
{
    icon: "cherry blossom",
    img: "img/cherry-blossom.png"
},
{
    icon: "fuji",
    img: "img/fuji-mountain.png"
},
{
    icon: "fuji",
    img: "img/fuji-mountain.png"
},
{
    icon: "katana",
    img: "img/katana.png"
},
{
    icon: "katana",
    img: "img/katana.png"
},
{
    icon: "maneki",
    img: "img/maneki-neko.png"
},
{
    icon: "maneki",
    img: "img/maneki-neko.png"
},
{
    icon: "ninja",
    img: "img/ninja.png"
},
{

    icon: "ninja",
    img: "img/ninja.png"
},
{
    icon: "origami",
    img: "img/origami.png"
},
{
    icon: "origami",
    img: "img/origami.png"
},
{
    icon: "sushi",
    img: "img/sushi.png"
},
{
    icon: "sushi",
    img: "img/sushi.png"
},
{
    icon: "geisha",
    img: "img/geisha.png"
},
{
    icon: "geisha",
    img: "img/geisha.png"
}
];


var createBoard = function() {
    var gameBoard = document.createElement("table");
    for (i = 0; i < 4; i++) {
        var row = document.createElement("tr");
         for (j = 0; j < 4; j++) {
             var tile = document.createElement("td");
             var frontImg = document.createElement("img");
             frontImg.setAttribute("src", "img/circle-512.png");
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


var flipedCard;
var firstCard;
var secondCard;


var imgElement = document.querySelectorAll("img");
 for (i = 0; i < imgElement.length; i++) {
    imgElement[i].addEventListener("click", function() {
        this.classList.toggle("open");
        this.classList.toggle("show");
        this.classList.toggle("disabled");
        console.log(this);
        // this.classList.toggle("flip");
        console.log(this.classList);
          var cardId = this.getAttribute("data-id");
          this.setAttribute("src", cards[cardId].img);
          hasFlipped.push(cards[cardId]);
          if (hasFlipped.length === 2) {
            if (hasFlipped[0].img === hasFlipped[1].img) {
                matched();
            }
          }
        });
 }

var hasFlipped = [];
var matched = function(){
    hasFlipped[0].classList.add("match");
    hasFlipped[1].classList.add("match");
    hasFlipped[0].classList.remove("show", "open");
    hasFlipped[1].classList.remove("show", "open");
}

//Check for match
// var checkMatch = function() {
//     if (hasFlipped[0] === hasFlipped[1]) {
//         console.log("match");
//     } else {
//         console.log("not match");
//  }
// }
// checkMatch();

//     }
// }
// var hasFlippedCard = false;
// var firstCard;
// var secondCard;

// var flipedCard() {
//     this.classList.add("flip");
//     if (!hasFlippedCard) {
//         hasFlippedCard = true;
//         firstCard = this;
//     } else {
//         hasFlippedCard = false;
//         secondCard = this;

//         console.log(firstCard, secondCard);
//     }
// }
// flipedCard();







// var hasFlippedCard = false;

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