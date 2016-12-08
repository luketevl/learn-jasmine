function paciente(nome, idade, peso, altura){
  const classe = {
    print: () =>{ alert(`nome: ${nome} idade: ${idade}`);},
    batimentos: () => idade * 365 * 24 * 60 * 80,
    imc: () => peso / (altura * altura)
  };

  return classe;
}
