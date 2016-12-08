describe('Paciente', () => {
  it('should calcute IMC', () =>{
    const p = new pacienteBuilder().constroi();
    const imc = p.imc();
    expect(imc).toEqual(74/(1.75 * 1.75));
  })

})
