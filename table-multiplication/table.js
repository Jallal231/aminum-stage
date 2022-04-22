console.log("Début table multiplication");
  
let  checkcalcule = document.getElementById("tableauveirf");

let btnInit = document.getElementById("BoutonInit");
BoutonInit.addEventListener("click", init); 
 
let btnCheckInit = document.getElementById("BoutonCheckInit"); 
BoutonCheckInit.addEventListener("click" , checkinit);
 
let btnCheck = document.getElementById("BoutonCheck");
BoutonCheck.addEventListener("click" ,  check); 
 


 // TEST


 
function init() { 
     
    let min = 1;
    let max = 9;
    let init1 = Math.round(Math.random() * (max - min) + min); 
    let init2 = Math.round(Math.random() * (max - min) + min);
    let input1="input1"
    document.getElementById(input1).value = init1; 
    document.getElementById("input2").value = init2;

    // input1.value = calcule1;
    // input2.value = calcule2;
    
    console.log(init);
} 
 

 
function checkinit () { 

    let input1=document.getElementById("input1").value;
    document.getElementById("input1");
     
    let input2=document.getElementById("input2").value;
    document.getElementById("input2");
 
    let input3=document.getElementById("input3").value;
    document.getElementById("input3");
    
    // BLOCK DE CODE SI CONDITION VRAI

    if (input3 == input1 * input2) {
 
        console.log("resultat vrai");
     } else {

         console.log("resultat faux");
        

       } 

}
 
 function check () { 
      
    

 }
 
console.log("Fin table multiplication");
 