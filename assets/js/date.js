function obterDiaSemanaExtenso(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasSemana[diaSemana];
}

function obterMesExtenso(mes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[mes];
}


function formatarData() {
    const dataAtual = new Date();
    const diaSemana = obterDiaSemanaExtenso(dataAtual.getDay());
    const diaNumero = dataAtual.getDate();
    const mes = obterMesExtenso(dataAtual.getMonth());
    const ano = dataAtual.getFullYear();

    return `${diaSemana}, ${diaNumero} de ${mes} de ${ano}`;
}

function obterSaudacao() {
    const horaAtual = new Date().getHours();

    if (horaAtual >= 6 && horaAtual < 12) {
        return 'Bom dia,';
    } else if (horaAtual >= 12 && horaAtual < 18) {
        return 'Boa tarde,';
    } else {
        return 'Boa noite,';
    }
}

const dataElemento = document.querySelector('.data');
const saudacaoElemento = document.getElementById('saudacaoTexto');


dataElemento.textContent = formatarData();


saudacaoElemento.textContent = `${obterSaudacao()} Murilo!`;