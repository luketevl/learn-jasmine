describe('Consulta', () =>{
  let p ;

  beforeEach(()=>{
    p = new pacienteBuilder().constroi();
  })

  it('dont should price in RETORNO', () => {
    const c = new consulta(p, [], true, true);
    expect(c.price()).toEqual(0);
  });

  it('should price 25$ pear commum procedimento', () => {
    const p = new paciente('lukete', 12, 74, 1.75);
    const c = new consulta(p, ['p1', 'p2'], false, false);
    expect(c.price()).toEqual(50);
  })
})
