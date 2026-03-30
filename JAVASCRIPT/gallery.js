const imagens = document.querySelectorAll(".imagem-galeria");
const modal = document.getElementById("modalImagem");
const imgAmpliada = document.getElementById("imgAmpliada");
const fecharModal = document.getElementById("fecharModal");

imagens.forEach(function(imagem) {
    imagem.addEventListener("click", function() {
        modal.classList.add("ativo");
        imgAmpliada.src = imagem.src;
        imgAmpliada.alt = imagem.alt;
    });
});

fecharModal.addEventListener("click", function() {
    modal.classList.remove("ativo");
});

modal.addEventListener("click", function(evento) {
    if (evento.target === modal) {
        modal.classList.remove("ativo");
    }
});