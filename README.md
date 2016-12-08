# learn-jasmine
Learn about Jasmine

# Jasmine
> É uma _biblioteca_ javascript

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
- **Descreve** cada testes (**cenário**)
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


# Observações
- Teste **automatizado**
  - **Cenários** são as possibilidades
  - **Ação**
  - **Saída**
- **Spec** é o nome do teste _automatizado_
