document.addEventListener("DOMContentLoaded", function () {

    var statusFilter = document.getElementById("statusFilter");
    var clienteFilter = document.getElementById("clienteFilter");
    var responsavelFilter = document.getElementById("responsavelFilter");


    var tabela = document.querySelector(".tabela");
    var linhas = tabela.querySelectorAll("tbody tr");


    var limparFiltrosBtn = document.getElementById("limparFiltrosBtn");


    statusFilter.addEventListener("change", function () {
      filtrarTabela();
    });

    clienteFilter.addEventListener("change", function () {
      filtrarTabela();
    });

    responsavelFilter.addEventListener("change", function () {
      filtrarTabela();
    });

    limparFiltrosBtn.addEventListener("click", function () {
      statusFilter.value = "todos";
      clienteFilter.value = "todos";
      responsavelFilter.value = "todos";

      linhas.forEach(function (linha) {
        linha.style.display = "";
      });
    });

    function filtrarTabela() {
      var statusSelecionado = statusFilter.value.toUpperCase();
      var clienteSelecionado = clienteFilter.value.toUpperCase();
      var responsavelSelecionado = responsavelFilter.value.toUpperCase();

      linhas.forEach(function (linha) {
        var status = linha.cells[6].textContent.toUpperCase();
        var cliente = linha.cells[2].textContent.toUpperCase();
        var responsavel = linha.cells[8].textContent.toUpperCase();

        var atendeFiltro =
          (statusSelecionado === "TODOS" || status === statusSelecionado) &&
          (clienteSelecionado === "TODOS" || cliente === clienteSelecionado) &&
          (responsavelSelecionado === "TODOS" || responsavel === responsavelSelecionado);

        linha.style.display = atendeFiltro ? "" : "none";
      });
    }
  });