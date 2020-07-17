/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

let generator = () => {
  
    let suite = [ Hearts, Spades, Clubs, Diamonds]
    let value = [1,2,3,4,5,6,7,8,9,10,King,Queen,Jack,Ace]

    let suiteIndex = Math.floor(Math.random() * suite.length);
    let valueIndex = Math.floor(Math.random() * value.length)

    document.querySelector(".card").classList.add(suite[suiteIndex]);
    return value[valueIndex];
};


