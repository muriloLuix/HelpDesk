document.addEventListener("DOMContentLoaded", function () {
    // Verifica se o menu já foi aberto antes
    if (!localStorage.getItem("menuAberto")) {
        // Adiciona a classe aberto ao menu para mostrar a animação
        document.getElementById("menuLateral").classList.add("aberto");

        // Define a flag no localStorage indicando que o menu foi aberto
        localStorage.setItem("menuAberto", true);
    }
});