console.log("test");

let liste = document.getElementById("ma_liste");
console.log(liste);

let element1 = document.getElementById("item1");
console.log(element1);
// element1.innerHTML="<p>c'est mon paragraphe</p>"
element1.innerText="finalement je suis arrivé a 09h10" ;
  
let element2 = document.getElementById("item2") ;
console.log(element2) ;
 // elemnt.2 innerHTLM="<p>c'est mon paragraphe</p>"
element2.innerText="Ces bon j'ai reussi a me connecter a ma session";

let element3 = document.createElement("li") ;
 
// createElement = li.getElementById("item3")
 
element3.innerText="Creation d'un nouvel element list";
console.log(element3);


liste.appendChild(element3);


let element4 = document.createElement("li");
  
// createElement = li.getElementById("item4")
  
element4.innerText="Nouvel chose" ;
console.log(element4) ;
  
liste.appendChild(element4) ;


