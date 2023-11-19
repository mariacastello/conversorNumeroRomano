class ConversorRomano {
    constructor() {
      this.romanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };
    }
  
    paraReal(numeroRomano) {
      let resultadoConta = 0;
  
      for (let i = 0; i < numeroRomano.length; i++) {
        if (this.romanos[numeroRomano[i]] < this.romanos[numeroRomano[i + 1]]) {
          resultadoConta -= this.romanos[numeroRomano[i]];
        } else {
          resultadoConta += this.romanos[numeroRomano[i]];
        }
      }
  
      return resultadoConta;
    }
  }
  
  class ConversorReal {
    constructor() {
      this.valorReal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      this.valorRomanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    }
  
    paraRomano(numeroReal) {
      let resultadoRomano = '';
  
      for (let i = 0; i < this.valorReal.length; i++) {
        while (numeroReal >= this.valorReal[i]) {
          resultadoRomano += this.valorRomanos[i];
          numeroReal -= this.valorReal[i];
        }
      }
  
      return resultadoRomano;
    }
  }
  
  class Conversor {
    static converterParaReal(numeroRomano) {
      const conversorRomano = new ConversorRomano();
      return conversorRomano.paraReal(numeroRomano);
    }
  
    static converterParaRomano(numeroReal) {
      const conversorReal = new ConversorReal();
      return conversorReal.paraRomano(numeroReal);
    }
  }
  
  function converterParaReal() {
    const numeroRomano = document.getElementById('numeroRomano').value;
    const resultadoReal = Conversor.converterParaReal(numeroRomano);
    document.getElementById('resultadoReal').innerText = resultadoReal;
  }
  
  function converterParaRomano() {
    const numeroReal = document.getElementById('numeroReal').value;
    const resultadoRomano = Conversor.converterParaRomano(numeroReal);
    document.getElementById('resultadoRomano').innerText = resultadoRomano;
  }
  