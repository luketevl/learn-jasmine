function pacienteBuilder(){
  let nome ="lukete";
  let idade = 23;
  let peso = 74;
  let altura = 1.75;

  const classe = {
    constroi: () => new paciente(nome, idade, peso, altura),
    comIdade: (number) => {
      idade = number;
      return this;
    }
  }

  return classe;
}
