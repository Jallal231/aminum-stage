console.log("test");

let liste = document.getElementById("ma_liste");
console.log(liste); 
 

let mon_text6 = "finalemenet je suis arrivé a 9h10"; 
createElement(liste ,mon_text6);        


let mon_text5 = "Ces bon j'ai reussi a me connecter a ma session"; 
createElement(liste , mon_text5);

let mon_text4 = "Creation d'un nouvel element list"; 
 createElement(liste , mon_text4);

let mon_text3 = "Nouvel chose";
createElement(liste, mon_text3);


function createElement(ma_liste, mon_text) {
    let element = document.createElement("li");
    element.innerText = mon_text;
    ma_liste.appendChild(element);
}

let mon_text1 = "je cree le premier element avec la fonction";
createElement(liste, mon_text1);

let mon_text2 = "La j'écris une deuxieme chose avec la fonction";
createElement(liste, mon_text2); 
 

let text_saisie = document.getElementById("saisie").value  
AjouterElemet ("liste, text_saisie")

 

 

    