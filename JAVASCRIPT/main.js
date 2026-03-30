const botaoWhatsapp = document.getElementById("botao-whatsapp");
const botaoMenu = document.getElementById("botao-menu");
const botaoOrderNow = document.getElementById("botao-order");


botaoWhatsapp.addEventListener("click", function () {
    const numero = "5978930761";
    const mensagem =  "Hello! I would like to place an order from Nelly's Food. Could you please send me more information?";
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
});

botaoMenu.addEventListener("click", function () {
    window.location.href = "menu.html";
});

botaoOrderNow.addEventListener("click", function () {
    const numero = "5978930761";
    const mensagem = "Hello! I would like to place an order now from Nelly's Food.";
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
});