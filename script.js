function calcularIMC() {
    let alturaCentimetros = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
  
    let alturaMetros = alturaCentimetros / 100;
    let imc = peso / (alturaMetros * alturaMetros);
  
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2);
  
    if (imc < 18.5) {
      resultado.innerHTML += ' (Abaixo do peso)';
    } else if (imc >= 18.5 && imc < 25) {
      resultado.innerHTML += ' (Peso normal)';
    } else if (imc >= 25 && imc < 30) {
      resultado.innerHTML += ' (Sobrepeso)';
    } else {
      resultado.innerHTML += ' (Obeso)';
    }
  }
  