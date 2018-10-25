let Elementbox = document.getElementsByTagName("div");
var littlebox = Elementbox [1];
let bigbox = Elementbox [0];
var time = setInterval (mover, 5);
var intposX = 0, intposY = 0;
var diagonal = 1;


function mover (){

if  (diagonal ==1 &&  intposX < 150 && intposY < 150) {
    intposX ++; intposY ++;
    } else if (intposX > 0 && intposY == 150){
        intposX--; diagonal = 0;
    } else if (diagonal==0 && intposY > 0 && intposX < 150){
        intposY--; intposX++;
    } else if (intposY == 0 && intposX > 0){
        intposX--; 
    }
    else { diagonal = 1}
    littlebox.style.left = intposX + "px";
littlebox.style.top = intposY + "px"; 
}
