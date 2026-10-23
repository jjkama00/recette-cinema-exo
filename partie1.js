//Choix des variables
const prixpourmoinsde16ans = 1500
const prixpouraumoins16ans = 2500
// 1-L'AGE DES PERSONNES ET LE PRIX DE LEUR TICKET
for( let i=11; i<=20;i++) {
    if(i<16){
 console.log(`le ticket de la personne de ${i} ans est de ${prixpourmoinsde16ans} FCFA.`);
    } else {
 console.log(`le ticket de la personne de ${i} ans est de ${prixpouraumoins16ans} FCFA.`);
    }
    }
    //2- total des recettes
let recettetotal = 0
for( let i=11; i<=20;i++) {
    if(i<16){
 recettetotal+=prixpourmoinsde16ans
    } else {
 recettetotal+=prixpouraumoins16ans
    }
}
console.log (`la recette est de ${recettetotal} FCFA`)
    // 3-nombre de ticket par prix
     let nombticketmoins16 = 0
     let nombticketaumoins16 = 0
     for( let i=11; i<=20;i++) {
    if(i<16){
 nombticketmoins16++;
    } else {
 nombticketaumoins16++;
    }
} 
console.log (`le nombre de ticket de moins de 16 ans est de ${nombticketmoins16}`)
console.log (`le nombre de ticket d' au moins 16 ans est de ${nombticketaumoins16}`)

