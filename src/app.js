/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var exte = [".com", ".net", ".us", ".io"];

  for (let index = 0; index < pronoun.length; index++) {
    let element = pronoun[index];
    //console.log(element);
    for (let i = 0; i < adj.length; i++) {
      let adjetivo = adj[i];
      //console.log(x);
      for (let j = 0; j < noun.length; j++) {
        let sustantivo = noun[j];
        for (let z = 0; z < exte.length; z++) {
          let extension = exte[z];

          console.log(element, adjetivo, sustantivo, extension);

          let add = document.createElement("p");
          const node = document.createTextNode(
            element + adjetivo + sustantivo + extension
          );
          add.appendChild(node);

          const div = document.getElementById("test");
          div.appendChild(add);
        }
      }
    }
  }
};
