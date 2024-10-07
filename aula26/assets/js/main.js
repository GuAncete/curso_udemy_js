function meuEscopo() {
    const resultado = document.querySelector('.resultado')
    const form = document.querySelector('.form');

    function recebeEventoForm(evento) {
        


        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        let imc;

        imc = (peso / (altura * altura))

        if (imc > 18.5) {
            resultado.innerHTML += `<p>Seu IMC: ${imc}(Abaixo do Peso)</p>`;
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado.innerHTML += `<p>Seu IMC: ${imc}(Peso Normal)</p>`;
        } else if (imc >= 25 && imc < 29.9) {
            resultado.innerHTML += `<p>Seu IMC: ${imc}(Sobrepeso)</p>`;
        } else if (imc >= 30 && imc < 34.9) {
            resultado.innerHTML += `<p>Seu IMC: ${imc}(Obesidade grau 1)</p>`;
        } else if (imc >= 35 && imc < 39.9) {
            resultado.innerHTML += `<p>Seu IMC: ${imc}(Obesidade grau 2)</p>`;
        } else if (imc > 40) {
            resultado.innerHTML += `<p>Seu IMC: ${imc}(Obesidade grau 3)</p>`;
        }

    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();