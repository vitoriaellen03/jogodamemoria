/// Importando imagens ///
 const listaImgs = ["assets/img/background1.png",
 "assets/img/background2.png",
 "assets/img/background3.png"];


/// Função mudar backgroud ///

document.addEventListener("DOMContentLoaded", function(){
   
   var links = document.querySelectorAll(".niveis li");
   for(let x=0; x < links.length; x++){
      
      links[x].onmouseover = function(){
         
         document.querySelector("#imagem img").src = this.querySelector("img").src;
         
      }
      
   }
});