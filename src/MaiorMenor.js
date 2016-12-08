function maiorMenor(){
  const classe = {
    encontra: (nums) => {
      menor = Number.MAX_VALUE;
      maior = Number.MIN_VALUE;
      nums.forEach((num) =>{
        if (num < menor) {
          menor = num;
        }
        else if(num > maior){
          maior = num;
        }
      })
    },

    pegaMenor: () => menor,
    pegaMaior: () => maior,
  };

  return classe;
}
