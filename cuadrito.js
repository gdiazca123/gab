let Elementbox = document.getElementsByTagName("div");
var littlebox = Elementbox [1];
let bigbox = Elementbox [0];
var time = setInterval (mover, 5);
var intposX = 0, intposY = 0;


function mover (){

if  (intposX < 150 && intposY == 0) {
    intposX ++;
    } else if ( intposY < 150 && intposX == 150){
        intposY ++;
    } else if (intposX > 0 && intposY == 150){
        intposX--;
    } else if (intposY > 0 && intposX == 0){
        intposY--;
    }
    littlebox.style.left = intposX + "px";
littlebox.style.top = intposY + "px"; 
}
