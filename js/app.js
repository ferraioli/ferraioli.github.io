const linksAtivo = [...document.querySelectorAll(".tab-links")];
const educacao = document.querySelector("#educacao");
const habilidades = document.querySelector("#habilidades");

linksAtivo[0].addEventListener("click", ()=>{
        educacao.style.display = 'none'
        habilidades.style.display = 'block'
        verificarClasse(linksAtivo[0], linksAtivo[1])
})

linksAtivo[1].addEventListener("click", ()=>{
    educacao.style.display = 'block'
    habilidades.style.display = 'none'
    verificarClasse(linksAtivo[1], linksAtivo[0])
})


let verificarClasse = (classe, classe2) =>{
    if(classe.classList == "tab-links" && classe2.classList == "tab-links link-ativo"){
        classe.classList.toggle('link-ativo')
        classe2.classList.toggle('link-ativo')

    }
}
