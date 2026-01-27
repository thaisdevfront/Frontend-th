function abrirWhatsApp() {
const telefone = "5512981021517"; // DDI + DDD + número
const mensagem = "Olá! Gostaria de mais informações";


const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
window.open(url, "_blank");
}