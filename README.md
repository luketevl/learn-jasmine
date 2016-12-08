# learn-jasmine
Learn about Jasmine

# Jasmine
> É uma _biblioteca_ javascript
- Facilita a identificar o erro

# Instalação
- https://jasmine.github.io/
- **Standalone**
  - Folders: _src_(código fonte) | _spec_(testes automatizado) | _SpecRunner_(roda o teste)

# Escrevendo o teste
- Criar arquivo **nameSpec.js** na _pasta_ **spec**
- Incluir o **spec** no **SpecRunner**


# Funções
- **Informação** o que está sendo testado | NORMALMENTE _nome da classe_
```js
describe(className, function(){});
```
- **Descreve** cada testes (**cenário**) | Descrição do teste
```js
describe(className, function(){
  it("should Test description", function(){
    // faz o teste aqui
  });
});
```
- **Espero** que alguma coisa...
```js
expect();
```
- **Verifica** se é **IGUAL**
```js
.toEqual(param);
```
- **ANTES** de rodar _cada teste_ ele executa o **beforEach** | Usado para códigos _repetidos_
```js
beforEach(function(){
  // ... code here
});
```


# Observações
- Teste **automatizado**
  - **Cenários** são as possibilidades
  - **Ação** executa
  - **Saída** espera
- **Spec** é o nome do teste _automatizado_
- **SpecRunner** é quem _executa_ o teste
- Como funciona:
  - Da _new_ no que quer testar
  - Chama o _comportamento_ passando o _cenario_
  - Depois faz as **asserts**
- Tenha **um teste de equivalencia**, não adianta ter um milhão de testes se todos vão passar juntos. **TESTE PARTES DIFERENTES DO CÓDIGO** | _Classes de equivalência é o nome que damos para quando temos testes "parecidos", que exercitam o mesmo caminho no código de produção_
- _CUIDADO_ faça parte do teste de forma **REUTILIZAVEL** para isso use, **beforeeach** e **aftereach**
- _Podemos_ ter _vários niveis_ dos **describe** | Muda apenas no relatório
- **TEST DATA BUILDER** Use o padrão de projeto _BUILDER_ pois ela _ajuda_ a criar **objetos** para todos os testes
- **AFTEREACH** não é muito útil em **testes unitários**, _Em testes de integração, podemos usá-lo para liberar algum possível recurso que alocamos para determinado teste._
- _Quanto_ mais **acoplado** mais _dificil_ de testar
- **TDD** passos:
  - Faz o teste
  - Teste falha
  - Implementa o código o _mais simples_ possível para que ele **passe**, campos na mão
  - **REFATORAR**
- **TDD**, organiza o raciocionio, sai mais testes
