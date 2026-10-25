
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const botaoTema = document.getElementById("tema");
const ano = document.getElementById("ano");

menuToggle.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");

    menuToggle.setAttribute("aria-expanded", aberto);
    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

document.querySelectorAll("#menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

botaoTema.addEventListener("click", function () {
    const temaClaro = document.body.classList.toggle("claro");

    botaoTema.textContent = temaClaro ? "☀" : "☾";
    botaoTema.setAttribute(
        "aria-label",
        temaClaro ? "Ativar tema escuro" : "Ativar tema claro"
    );
});

ano.textContent = new Date().getFullYear();
