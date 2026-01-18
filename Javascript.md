# 📝 Simulado – JavaScript (Tecnologias Web)

⏱️ **Duração sugerida:** 90 minutos  
📊 **Cotação total:** 20 valores  

---

## Grupo I – Questões Teóricas (8 valores)

### 1. JavaScript e Linguagens de Script (1,5 valores)

a) Explique o que se entende por **linguagem de script**.  
Uma linguagem de script é uma linguagem de programação que suporta scripts, que são programas escritos para um sistema de tempo de execução especial que automatiza a execução de tarefas. O código é interpretado por outro programa em tempo de execução, em vez de ser compilado diretamente para código de máquina. As linguagens de script permitem projetar e executar programas para automatizar tarefas em diferentes ambientes, como páginas web ou sistemas operacionais.
 - Linguagem de script é uma ferramenta para escrever scripts que são comandos para automatizar tarefas, controlar sistemas ou adicionar interatividade a aplicações, ou seja, aplica ações de programas com lógica.
b) Indique **duas diferenças** entre linguagens interpretadas e compiladas.
Linguagens compiladas traduzem todo o código para código de máquina antes da execução, resultando em programas mais rápidos e eficientes (ex: C, C++), enquanto interpretadas executam linha por linha em tempo real por um interpretador, oferecendo mais flexibilidade e prototipagem rápida (ex: Python, JavaScript).
 - Linguagens interpretadas executam o código linha por linha e são mais fáceis de aprender, são usados em Python e JavaScript. Linguagens compiladas usam um compilador para traduzir todo o código para código de máquina antes da execução e são mais rápidas e eficientes durante a execução, são usados em  C e C++.

---

### 2. Execução de JavaScript no Browser (1,5 valores)

a) Explique **quando** e **como** o código JavaScript pode ser executado numa página web. 
 - O script pode ser executado quando fizer o download do html e colocamos o script dentro do head ou do body.
b) Qual a vantagem de colocar um `<script>` no final do `<body>` ou utilizar o atributo `defer`?
 - Serve para maximizar a performance e evitar render blocking resources. Já o defer serve para que quando o script é muito longo e permite o download paralelo, entretanto, o script só é executado quando finalizado o download completo do HTML.

---

### 3. Conceitos Fundamentais: Objeto e Evento (2 valores)

a) Defina o conceito de **objeto** em JavaScript, indicando os seus principais componentes.  
 - Objeto é uma estrutura que serve para armazenar dados, estruturar a aplicação e deixar o código mais limpo e modular. Os principais componentes são identidade, propriedades e métodos.
b) Explique o que é um **evento** e dê dois exemplos.
 - Evento é uma ação detetada pelo JavaScript que provoca uma execução específica chamando uma função com o respetivo evento. Dois exemplos são click e dbclick.

---

### 4. Variáveis e Tipos de Dados (2 valores)

a) Explique a diferença entre `var`, `let` e `const`.  
 - O 'var' é visível no código todo, já o 'let' só é visível apenas no bloco onde foi criada, e o 'const' não permite a alteração do valor inicial da variável.
b) Distinga **Primitive Types** de **Reference Types**, indicando um exemplo de cada.
 - Os dois declaram variáveis, mas Primitive armazena como dados simples e contêm diretamente os valores que
lhe são atribuídos: var color="red";. Já Reference armazena como objetos e não guardam o objeto diretamente na
variável: var obj=new Object();.

---

### 5. Scope e Keyword `this` (1 valor)

Explique o conceito de **scope** em JavaScript e o comportamento da keyword `this` quando usada:
- Num método de um objeto  
- Numa função genérica  
 - Scope refere-se à acebilidade e visibilidade de variáveis e funções em diferentes partes do código JavaScript.
 Em método de um objeto: this refere o objeto proprietário
const obj = {
  name: "João",
  greet: function() {
    console.log(this.name); // "João"
  }
}
Em função genérica: this refere o objeto global (window)
function greet() {
  console.log(this); // window (em browser)
}

---

## Grupo II – Questões Práticas (12 valores)

### 6. Inserção de Scripts e Eventos (2 valores)

Crie um botão HTML que, ao ser clicado, execute uma função JavaScript que mostre um `alert`
com a mensagem:

> "JavaScript em execução!"

A função deve estar definida:
- a) Num **script embebido**
- b) Num **script externo**
a)<button onclick="mensagem()">Clique aqui</button>
<script>
  function mensagem()
  {
    alert("JavaScript em execução!");
  }
</script>
b)<button onclick="mensagem()">Clique aqui</button>
<script src="script.js"></script>
// ficheiro script.js
function mensagem()
  {
    alert("JavaScript em execução!");
  }

---

### 7. Variáveis, Operadores e Condicionais (2,5 valores)

Crie um script que:
- Declare uma variável `score` no intervalo `[0,100]`
- Converta a pontuação numa classificação segundo a escala:

| Intervalo | Classificação |
|----------|---------------|
| 90–100 | A |
| 80–89 | B |
| 70–79 | C |
| 60–69 | D |
| <60 | F |

Mostre o resultado na consola.
let score=85;
if (score>=90)
{console.log("Classificação: A");}
else if (score>=80 && score<90)
{console.log("Classificação: B");}
else if (score>=70 && score<80)
{console.log("Classificação: C");}
else if (score>=60 && score<70)
{console.log("Classificação: D");}
else
{console.log("Classificação: F");}

---

### 8. Arrays e Loops (2,5 valores)

a) Declare um array com os valores:  
`'mercedes', 'volvo', 'bmw', 'audi', 'kia', 'fiat'`
const cars=['mercedes', 'volvo', 'bmw', 'audi', 'kia', 'fiat'];

b) Crie um novo array contendo **apenas os elementos das posições pares** do array original.  

c) Utilize um ciclo `for` e o método `push()`.
const pares=[];
for(let i=0; i<cars.length; i+=2)
{pares.push(cars[i]);}
console.log(pares);

---

### 9. Objetos e Métodos (2,5 valores)

Crie um objeto `carro` com as seguintes propriedades:
- marca  
- cilindrada  
- combustivel  

E um método `calcularIuc(coeficiente)` que calcule o imposto com base na fórmula:

imposto = cilindrada × coeficiente

markdown
Copiar código

Mostre na consola:
- O objeto completo
- O valor do imposto para um coeficiente de `0.05`
const carro={
  marca: 'BMW',
  cilindrada: 2000,
  combustivel: 'gasoleo',
  calcularIuc: function(coeficiente){
    return this.cilindrada*coeficiente;
  }
};
console.log(carro);
console.log("IUC: "+carro.calcularIuc(0.05));

---

### 10. Funções e Arrow Functions (2,5 valores)

Crie uma **arrow function** `estatisticasNumeros` que:
- Receba um array de números
- Verifique se o array está vazio
- Calcule:
  - maior valor
  - menor valor
  - soma
  - média
- Retorne um objeto com esses valores

Teste a função com o array:
```js
[10, 5, 8, 20, 3]
const estatisticasNumeros = (num) =>{
  if (num.length === 0) {
    return null;}
    let soma=0;
    let menor=num[0];
    let maior=num[0];
    for (let i=0; i<num.length; i++){
      soma+=num[i];
      if(num[i]<menor)
      menor=num[i];
    if(num[i]>maior)
      maior=num[i];
    }
    let media=soma/num.length;
    return{
      maior: maior,
      menor: menor,
      soma: soma,
      media: media
    };
};
const resultado = estatisticasNumeros([10, 5, 8, 20, 3]);
console.log(resultado);
⭐ Questão Extra – Classes e Herança (Bónus – 1 valor)
Crie uma classe Robot com:

Propriedades: model, batteryLevel

Método status() que mostre na consola:

matlab
Copiar código
Robot model XR-22 has 89% battery remaining.
Instancie um objeto da classe e invoque o método.
class Robot{
  constructor(model,batteryLevel){
    this.model=model;
    this.batteryLevel=batteryLevel;
  }
  status(){
    console.log('Robot model ${this.model} has ${this.batteryLevel}% battery remaing.');
  }
}
const robot=new Robot("XR-22",89);
robot.status();
🔚 Fim do Simulado

---

Se quiseres, a seguir posso:
- ✅ Fazer a **resolução completa em Markdown**
- 🎯 Ajustar o nível para **exame normal / recurso**
- 🧠 Criar um **simulado só de JS (arrays + objetos + funções)**
- 🧪 Converter para **formato Moodle (quiz)**

Diz como queres continuar 👍