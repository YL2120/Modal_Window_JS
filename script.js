const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');

let toggle = false; //on cachde de base notre modale

btn.addEventListener("click",()=>{
    
    toggle = !toggle;  //à chaque fois qu'on clique sur le bouton

    if(toggle){
        modal.style.display = "block"; //on affiche notre block en premier mais ça reste en opacité 0
        setTimeout(() => {
            modal.style.opacity = 1; //au bout de 10ms, on applique notre opacité pour garder l'effet de transition.
        },10);
        
    }
    else if(toggle === false){
        modal.style.opacity = 0; //opacité 0 pour faire disparaître
        setTimeout(() => {
            modal.style.display = "none"; // on rend invisible dans le DOM la modale pour des questions de SEO
        },10);
    }
    
})