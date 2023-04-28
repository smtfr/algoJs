// var result = 0

// function somme (a,b){
//     result = a + b;
//     console.log(result);
// } ici on utilise une variable pour stocker le résultat

/*function somme (a,b){
    return a + b ;
} // return permet de pas utiliser de variable

console.log(somme (5,12)); */

// function calcTTC (a){
//     result = a * 1.2;
//     console.log(`Le prix TTC est ${result} €`);
// }
// calcTTC(100);

// function ttc(a){
//     return a * 1.2;
// }

// console.log(ttc(10));

// let Fate = ["saber","lancer","archer","caster","berserker"];
// function indexChoisi (a){
//     console.log(a[2]);
// }
// indexChoisi(Fate):

// function monTableau(){
//     monTab = [1,7,8,42,12178];
//     return monTab[2];
// }
// console.log(monTableau());

//mesNotes = [12,13,14,17,18,19,18,2]
// function moyenne(a){
//     var b = a.length,
//         c = 0, i;
//     for (let i = 0; i < b; i++) {
//         c += a[i];
//     }
//     return c/b;
// }
// console.log(moyenne([12,13,14,17,18,19,18,2]));

// function calculerMoyenne (tableau) {
//     let somme = 0 ;
//     for (let i = 0; i < tableau.length; i++) {
//         somme += tableau[i];  
//     }
//     const moyenne = somme / tableau.length;
//     return moyenne;
// }
// console.log(calculerMoyenne([10,5,20,15]));

// var noteUsa = "B";
// switch (noteUsa) {
//     case "A":
//         console.log("Très bon travail !");
//         break;
//     case "B":
//         console.log("Bon travail !");
//         break;
//     case "C":
//         console.log("Correct");
//         break;
//     case "D":
//         console.log("Mouai");
//         break;
//     case "E":
//         console.log("¨Pas ouf");
//         break;
//     case "F":
//         console.log("Médiocre");
//         break;
//     case "G":
//         console.log("A chier");
//         break;
//     default: 
//         console.log("Non noté");
//         break;
// }

//boucle for
 //let monTab = [25, 56, 598, 45484,4547,488746,9854,23]
// // for (let i = 0; i < monTab.length; i++) {
// //     console.log(i);
// // }

// var test = monTab[0];
// function maximum (monTab){
//     for (let i = 1; i < monTab.length; i++) {
//         if (monTab[i]<test) {
//             test = monTab[i];
//         }
//     }
// }
// console.log(maximum(monTab));

// function trouverMax(monTab){
//     var max = monTab[0];
//     for (let i = 1; i < monTab.length; i++) {
//         if (monTab[i]>max) {
//             max = monTab[i];
//         }
//     }
// }
// console.log(trouverMax([25, 56, 598, 45484,4547,488746,9854,23])) ;


//Ecrire une fonction qui retourne la valeur la plus haute d'un tableau

// function trouverMax(tableau) {
//     let max = tableau[0]; // initialiser le maximum à la première valeur du tableau
//     for (let i = 1; i < tableau.length; i++) {
//       if (tableau[i] > max) { // si l'élément courant est supérieur au maximum
//         max = tableau[i]; // mettre à jour le maximum
//       }
//     }
//     return max;
//   }
  
// console.log(trouverMax([45,63,20]));


// function trouverMin(tableau) {
//     let min = tableau[tableau.length-1]; // initialiser le minimum à la dernière valeur du tableau
//     for (let i = tableau[tableau.length-1]; i > -1; i--) {
//       if (tableau[i] < min) { // si l'élément courant est invérieur au minimum
//         min = tableau[i]; // mettre à jour le minimum
//       }
//     }
//     return min;
//   }
  
// console.log(trouverMin([10,45,63,20,5]));

//Ecrire une fonction qui renvoie un tableau trié par ordre croissant

// function triCroissant (a) {
//     let result = a.compare()
//     console.log(result);
// }

// triCroissant([25,55,1,2,12,12,117,454])
// function triCroissant(tableau){
// for (let i = 0; i < tableau.length; i++) {
//     for (let j = i + 1; j < tableau.length; j++) {
//         if (tableau[i] > tableau [j]){
//             let temp = tableau [i];
//             tableau[i] = tableau[j];
//             tableau[j] = temp;
//         }  
//     }
// }
// return tableau;
// }

// console.log(triCroissant([4,5,4,78,35,21,12,48,68,7875,4575,2,3,14])); // c'était chaud sa mère va falloir que je rebosse l'algo je suis nul 

// let mot = "twiiwt";
// let motTest = "";
// let stocking = "";
// function testPalindrome (a,b){
//     stocking = a;
//     b = a.split("").reverse().join("");

//     if (stocking !== b){
//         console.log(`${mot} n'est pas un palindrome`);
//     } else {
//         console.log(`${mot} est un palindrome`);
//     }

// }
// testPalindrome(mot,motTest);


// let mot = "zermabiliba".toLowerCase;
// let compteur = 0;
// function compteVoyelle (a){
//     for (let i = 0; i < a.split().length; i++) {
//         let voyelleTab = ["a","e","i","o","u","y"];
//         if (a.split().includes(voyelleTab))    {
//             compteur ++ ;
//         }    
//     }
//    return compteur ;
// }
// console.log(compteVoyelle(mot)); // j'étais pas loin mais vasy je suis nul


// let N = 155;
// for (let i = 0; i <= N ; i++) {
  
//   if(i == 0){
//     console.log("0");
//   } else if(Number.isInteger(i/3) && Number.isInteger(i/5) ){
//     console.log("FIZZBUZZ");
//   } else if (Number.isInteger(i/3)&& (!Number.isInteger(i/5))){
//     console.log("FIZZ");
//   } else if ((!Number.isInteger(i/3)) && Number.isInteger(i/5)){
//     console.log("BUZZ");
//   } else{
//     console.log(i);
//   }
// }

// let N = 155;
// for (let i = 0; i < N; i++) {
//     switch () {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }
    
// }


// let N = 5 ;
// console.log(`Voici la table de ${N}`);
// for (let i = 1; i <= 10 ; i++) {
//   console.log(`${N} x ${i} = ${i * N}`);
// }

// let N = 8 ;
// var result = 1;

// function facto (a){
//   for (let i = 1; i <= N ; i++) {
//     result *= i;
//   }
// console.log(result);
// }

// facto(N);

// for (let i = 0; i <= 10; i++) {
//   console.log(`Table de ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i*j}`);    
//   } 
// }
 /*XIV Ecrire une fonction qui renvoie le nombre de façons différentes de représenter un montant donné en utilisant un nombre limité de pièces de monnaie (par exemple 1,2 et 5 cents):
Cette fonction prend en entrée le montant à représenter et un tableau de pièces de monnaie disponibles. Elle utilise la méthode de programmation dynamique pour stocker les sous-problèmes résolus dans un tableau de mémoire memoire. Elle initialise la mémoire à zéro pour tous les montants jusqu'à la valeur montant donnée, sauf pour memoire[0] qui est initialisé à 1 pour représenter la façon de représenter un montant de 0 cent.
La fonction utilise ensuite une double boucle pour parcourir toutes les pièces de monnaie disponibles et tous les montants possibles. Pour chaque montant j supérieur ou égal à la valeur de la pièce actuelle pieces[i], elle ajoute le nombre de façons de représenter j - pieces[i] à la valeur de memoire[j]. À la fin de la double boucle, la valeur memoire[montant] représente le nombre total de façons de représenter le montant donné en utilisant les pièces de monnaie disponibles. */

// var montant = 0 ;
// var monnaieDispo = [1,2,5];
// var memoire = [1];

// function nombreRepresentationsMonnaie(a,b){
//   for (let i = 1; i < a; i++) {
//     for (let j = 1; j > b[i]; j++) {
      
//     }
//   }
// }
 

