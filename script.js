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


var gameBoard = document.createElement("table");

// var createBoard = function() {
    // var gameBoard = document.createElement("table");
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
// }
// createBoard();





//Adding data-id with numbers
var images = document.querySelectorAll("img");
for (i = 0; i < images.length; i++) {
    var setDataId = images[i].setAttribute("data-id", i);
}



//Create start button
var startButton = document.createElement("button");
startButton.innerHTML = "START";
document.body.appendChild(startButton);




// var arrayForRandom = [];
// for (i = 0; i < 16; i++) {
//     arrayForRandom.push(Math.floor(Math.random() * 17));
// }


// var test = [0,1,2,3];

function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
}



 shuffleArray(cards);
var imgElement = document.querySelectorAll("img");




var hasFlipped = [];
 for (i = 0; i < imgElement.length; i++) {
    imgElement[i].addEventListener("click", function() {


        // console.log("I'm "+ shuffledItem);
        // var shuffledImg = shuffledItem.img;
        // console.log("Im num" + shuffledImg);

          // var cardId = this.getAttribute("data-id");
// cards[shuffledNum]
         this.setAttribute("src", cards[this.dataset.id].img);
    //      console.log(count)



          hasFlipped.push(this);

          if (hasFlipped.length === 2) {
            if (hasFlipped[0].src === hasFlipped[1].src) {
                matched(hasFlipped[0], hasFlipped[1]);
                console.log("matched")
            } else if (hasFlipped[0].src !== hasFlipped[1].src) {
                unmatched(hasFlipped[0], hasFlipped[1]);
                console.log("not a match")
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
    image1.setAttribute("src", "img/circle-512.png");
    image2.setAttribute("src", "img/circle-512.png"); }, 800);
}