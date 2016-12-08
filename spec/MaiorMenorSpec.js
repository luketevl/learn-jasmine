describe('MaiorMenor', () => {
  it('should number in random order', () =>{
    const algoritmo = new maiorMenor();
    algoritmo.encontra([5,15,7,9]);
    expect(algoritmo.pegaMaior()).toEqual(15);
    expect(algoritmo.pegaMenor()).toEqual(5);
  });

  it('should number in DESC order', () =>{
    const algoritmo = new maiorMenor();
    algoritmo.encontra([9,8,7,6]);
    expect(algoritmo.pegaMaior()).toEqual(9);
    expect(algoritmo.pegaMenor()).toEqual(6);
  })

  it('should number in ASC order', () =>{
    const algoritmo = new maiorMenor();
    algoritmo.encontra([6,7,8,9]);
    expect(algoritmo.pegaMaior()).toEqual(9);
    expect(algoritmo.pegaMenor()).toEqual(6);
  });

  it('should number with list 1 element, this element is min value and max value', () =>{
    const algoritmo = new maiorMenor();
    algoritmo.encontra([2]);
    expect(algoritmo.pegaMaior()).toEqual(2);
    expect(algoritmo.pegaMenor()).toEqual(2);
  })

})
