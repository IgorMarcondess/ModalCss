const openModalButton = document.querySelector("#openModal");
const closeModalButton = document.querySelector("#fecharModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    //UTILIZADO O 'TOGGLE' POIS CASO A CLASSE ESTEJA APARECENDO, É REMOVIDA, CASO NÃO, ELA APARECE.
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}

//REALIZANDO O FOR EACH NAS VARIÁVEIS E APLICANDO O EVENTO.
[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal(), console.log("Abrindo modal"))
})

closeModalButton.addEventListener("click", () =>{
    console.log("Fechando o modal")
})
