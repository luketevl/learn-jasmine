function consulta(paciente, procedimentos, particular, retorno){
  const classe = {
    price: () => {
      if (retorno) {
        return 0;
      }
      let finalValue = 0;

      procedimentos.forEach(el => {
        if (el == 'radio-x') {
          finalValue += 55;
        }
        else if (el == 'gesso') {
          finalValue += 32;
        }
        else{
          finalValue += 25;
        }

        if (particular) {
          finalValue *= 2;
        }
      });
      return finalValue;
    }
  }
  return classe;
}
