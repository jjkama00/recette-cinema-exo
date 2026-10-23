//Choix des variables
const prixpourmoinsde16ans = 1500
const prixpouraumoins16ans = 2500
    //1- total des recettes
let recettetotal = 0
for( let i=11; i<=20;i++) {
    if(i<16){
 recettetotal+=prixpourmoinsde16ans
    } else if(i<18){
 recettetotal+=prixpouraumoins16ans
    } else {
      recettetotal+=prixpouraumoins16ans-500
    }
}
console.log (`la nouvelle recette est de ${recettetotal} FCFA`)
    
