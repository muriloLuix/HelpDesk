document.addEventListener("DOMContentLoaded", function () {
   
    if (!localStorage.getItem("menuAberto")) {
        
        document.getElementById("menuLateral").classList.add("aberto");

       
        localStorage.setItem("menuAberto", true);
    }
});