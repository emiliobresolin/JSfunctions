// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
      nome,
      sobrenome,
  
      // Getter
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      },
  
      // Setter
      set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
      },
  
      fala(assunto = 'falando sobre NADA') {
        return `${this.nome} está ${assunto}.`;
      },
  
      altura: a,
      peso: p,
  
      // Getter
      get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
      }
    };
  }
  
  const p1 = criaPessoa('Emilio', 'Bresolin', 1.8, 75);
  const p2 = criaPessoa('Leticia', 'Bloete', 1.6, 57);
  const p3 = criaPessoa('Helena', 'Bresolin', 1.1, 22);
  
  console.log(p1.nomeCompleto, p1.imc);
  console.log(p2.nomeCompleto,p2.imc);
  console.log(p3.nomeCompleto,p3.imc);