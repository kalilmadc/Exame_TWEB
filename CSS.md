
# 📝 Simulado – CSS (Tecnologias Web)

⏱️ **Duração sugerida:** 90 minutos  
📊 **Cotação total:** 20 valores  

---

## Grupo I – Questões Teóricas (8 valores)

### 1. CSS – Conceitos Fundamentais (1,5 valores)

a) Explique o papel do **CSS** no desenvolvimento de aplicações web.  
 - CSS (Cascading Style Sheets) é uma linguagem de estilo usada para controlar a apresentação visual de documentos na web (HTML/XML), definindo cores, fontes, layouts e espaçamentos, separando o conteúdo da sua aparência para criar páginas responsivas e esteticamente agradáveis. Ele funciona em conjunto com o HTML, permitindo estilizar elementos através de regras, seletores (como tags ou classes) e propriedades/valores (como color: red;), sendo fundamental para o design moderno da web.
 - CSS(Cascading Style Sheets) é uma linguagem de estilo que serve para controlar, estilizar e tornar páginas HTML responsivas e esteticamente agradáveis.
b) Indique **duas vantagens** da utilização de ficheiros CSS externos.
 *  Possibilidade de aplicação imediata a vários documentos HTML
    * Garante que diversos documentos HTML são submetidos às mesmas regras de formatação.
 * Muito maior flexibilidade
    * Alterações centralizadas
    * Evita a repetição de formatações
 * Maior correção
    * Melhora a portabilidade
    * Reduz a possibilidade de erros
    * Maior uniformidade
        * Melhora a consistência gráfica
 - O CSS tem como vantagens em aplicar menos código em multiplas páginas HTML que garante menos erros, menos repetições de formatações, mais qualidade daquilo que portáavel, tudo isso em apenas um único documento de CSS, o que torna mais eficaz do que fazer separadamente.

---

### 2. Ligação CSS / HTML (1,5 valores)

a) Identifique e explique as **três formas** de aplicar CSS a um documento HTML.  
 - As três formas são External Style Sheet, Embedded Style Sheet e Inline Style, o External se faz com um ficheiro externo usando a tag link ou com import do ficheiro externo dentro da tag style, Embedded se faz no próprio ficheiro usando style e colocamos as propreidades dentro, Inline se faz dentro de um elemento do próprio ficheiro, no qual identificamos a propriedade e o valor.
b) Indique qual é a forma **mais eficiente em termos de performance** e justifique.
 - A forma mais eficaz é a External Style Sheet, pois caso tenha algum problema, só precisamos alterar no ficheiro externo, nas outras formas, agente tem que mudar separadamente se houver mais de um ficheiro.

---

### 3. Seletores CSS (2 valores)

Considere os seguintes seletores:

```css
p span
p > span
p + span
p ~ span
````

Explique **o que seleciona cada um**, referindo o conceito de **contexto**.
 - No primeiro, indica um span dentro de um p, no segundo indica um span que seja filho direto do p, no terceiro, indica o primeiro span que esteja a seguir do p, no quarto, são todos os spans que estejam a seguir do p e que tenham o mesmo pai.
---

### 4. Especificidade e Conflitos (2 valores)

a) O que se entende por **especificidade** em CSS?
 - A especificidade em CSS representa o jeito que aplicamos as propriedades seguindo uma ordem, a propriedade mais específica vem primeiro ignorando aquilo que está antes e depois, se não especificar, vai aplicar da primeira até a última propridade.

b) Ordene os seguintes seletores por **ordem crescente de especificidade**, justificando:

```css
p
div p
.menu p
#content p
```
 - A ordem é p, div p, .menu p e #content p, pois o p sozinho afeta todos os p sem exceção já que não específica, o div p afeta todos os p dentro de uma div e possui mais prioridade do que o p sozinho, o .menu p afeta todos os p dentro de um elemento com a classe menu e tem mais prioridade do que div p, o #content p afeta todos os p dentro de elemento com o id content, além de ter mais prioridade que .menu p, é o mais específico entre todas as propriedades.

---

### 5. Herança em CSS (1 valor)

Explique o conceito de **herança**, indicando:

* Quando ocorre
 - Isto acontece quando um elemento filho não tem um estilo definido, mas o elemento pai tem.
* Quando **não** ocorre
 - Isto acontece quando um elemento filho tem estilo definido, logo a herança do elemento pai não afeta.

---

## Grupo II – Questões Práticas (12 valores)

### 6. Seletores e Conflitos de Formatação (3 valores)

Considere o seguinte código HTML:

```html
<body>
  <div id="box">
    <p class="text">CSS <span>Selectors</span></p>
  </div>
</body>
```

E as regras CSS:

```css
p { color: blue; }
#box p { color: green; }
p.text span { color: red; }
```

a) Qual a cor do texto **“CSS”**?
 - O "CSS" fica verde.
b) Qual a cor do texto **“Selectors”**?
 - O "Selectors" fica vermelho.
c) Justifique as respostas com base na **especificidade**.
 - O "CSS" está em um p que fica dentro do elemento id box, já o "Selectors" está em um span que fica dentro de um p com classe text e por ser a mais específica, ela é aplicada em vez de #box p.

---

### 7. Pseudo-classes e Pseudo-elementos (2,5 valores)

a) Explique a diferença entre **pseudo-classes** e **pseudo-elementos**.
 - Os pseudo-classes são baseados no estado do elemento e utilizam : para identificar, já os pseudo-elementos referem aos elementos fictícios, que são baseados na estrutura do documento e utilizam :: para identificar.

b) Escreva uma regra CSS que:

* Altere a cor de fundo de um `<li>` quando o rato passa por cima
li:hover{background-color: orange}
* Insira o texto `"→"` antes de cada `<li>`
li::before{content:'→'}

---

### 8. Box Model (3 valores)

Considere a seguinte regra CSS:

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
  box-sizing: content-box;
}
```

a) Calcule a **largura total ocupada** pelo elemento.
 - box-sizing: content-box define o conteúdo dentro da caixa, ou seja, width representa a largura do conteúdo, padding representa o preenchimento e border representa a borda, já o margin é o espaçamento das caixas, ou seja, não serve para a largura, a largura total é largura do conteúdo + preenchimento + borda, como padding e border tem dos dois lados, então fica width+padding+padding+border+border=200+20+20+5+5=250px

b) Indique como mudaria o valor se fosse utilizado:

```css
box-sizing: border-box;
```
 - box-sizing: border-box define o elemento todo, ou seja, width é a largura total do elemento, o padding e border ficam dentro do width, logo a largura total é 200px

---

### 9. Display e Layouts (2 valores)

a) Explique a diferença entre:

* `display: block`
 - aplica elementos em vertical
* `display: inline`
 - aplica elementos em uma única linha
* `display: inline-block`
 - aplica elementos em uma única linha mas dá para definir a largura e a altura

b) Indique uma situação prática onde o uso de `inline-block` seja preferível.
 - Um exemplo seria criar um menu horizontal e modificar a altura e a largura entre os elementos

---

### 10. Flexbox (1,5 valores)

Considere um container flexível:

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

a) Explique o efeito de `justify-content`.
 - Define o alinhamento dos flex items ao longo do main axis, com o space-between faz com que o primeiro item fica no main start, o último item fica no main end e os outros itens ficam entre eles com espaçamento iguais.

b) Explique o efeito de `align-items`.
 - Define o alinhamento dos items ao longo do cross axis, com o center faz com que todos os itens ficam entre cross start e cross end centrados.

---

## ⭐ Questão Extra (Bónus – 1 valor)

Explique **duas vantagens do Flexbox** relativamente aos layouts tradicionais baseados em `float` ou `display: block`.
 - O flexbox foi feito para simplificar o design de layouts complexos e responsivos, ao contrário do float e display: block, mas de vantagens tem como a facilidade de alinhamento e responsividade nativa.

```

---

Se quiseres, posso agora:
- 📘 Criar a **resolução em Markdown**
- 🧪 Adaptar para **teste Moodle**
- 🖨️ Ajustar para **formato de exame impresso**
- 🔥 Criar um **simulado só de seletores / flex / grid**

É só dizer 👍
```
