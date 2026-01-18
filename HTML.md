# 📝 Simulado – HTML (Tecnologias Web)

⏱️ **Duração sugerida:** 90 minutos  
📊 **Cotação total:** 20 valores  

---

## Grupo I – Questões Teóricas (8 valores)

### 1. HTML e Web Standards (1,5 valores)

 a) Defina **HTML** e explique o seu papel na arquitetura das tecnologias web.  
 - HyperText Markup Language é uma linguagem de marcação de hipertexto utilizada para criar e estruturar páginas web e o seu papel é fornecer a estrutura fundamental e o conteúdo base para todas as páginas.
 b) Indique a camada (layer) da aplicação web onde o HTML se insere.
 - A camada é estrutura ou conteúdo.

---

### 2. HTML vs HTML5 (1,5 valores)

a) Explique o conceito **“Evolution, not Revolution”** associado ao HTML5.  
 - O HTML5 não representa uma revolução do HTML, mas sim uma evolução, pois se baseia nas versões anteriores mantendo a compatibilidade e a familiaridade, mas introduzindo novas funcionalidades e melhorias de forma incremental.
b) Indique **duas melhorias** introduzidas com o HTML5.
 - Duas melhorias do HTML5 são a adição de novas etiquetas semânticas e o suporte nativo para áudio e vídeo.

---

### 3. Elementos, Tags e Atributos (2 valores)

a) Explique a diferença entre **tag** e **elemento HTML**.  
 - A tag definem os elementos estruturais marcando o início e o fim de um elemento, já o elemento é a estrutura completa que é a tag inicial, o conteúdo e a tag final.
b) Distinga **elementos normais** de **empty elements**, indicando dois exemplos de cada. 
 - Os elementos normais possuem conteúdo e as duas tags, já os empty elements não possuem conteúdo e só tem uma tag.
c) Explique a função dos atributos `id` e `class`.
 - O atributo 'id' é único e só pode ter o mesmo nome uma vez no programa, já o atributo 'class' é múltiplo e pode ter o mesmo nome em vários elementos no programa

---

### 4. Estrutura de um Documento HTML (2 valores)

Explique a função das seguintes partes de um documento HTML:

- `<!DOCTYPE html>`
Indica a versão que está a ser utilizada
- `<html>`
Indica o início e o fim do documento que é delimitado pelas tags
- `<head>`
Indica o cabeçalho
- `<body>`
Indica o corpo

Indique ainda **dois elementos importantes** que podem existir dentro da tag `<head>`.
 - Dois elementos são <meta> e <title>.

---

### 5. Tags Semânticas (1 valor)

a) O que são **tags semânticas**?  
 - As tags semânticas são marcadores que dão significado e contexto ao conteúdo que já possuem formatação dependendo do seu significado como header, nav e footer.
b) Indique **três exemplos** e explique a vantagem da sua utilização.
 - Em vez de usarmos tags genéricas como div ou span, tags semânticas possuem formatação dependendo do seu significado como header - cabeçalho, nav - agrupamento de links de naevegação e footer - rodapé. Como o próprio nome indica nessas tags, em vez atribuir código para formatá-los, não é necessário.

---

## Grupo II – Questões Práticas (12 valores)

### 6. Estrutura Base de um Documento HTML (2 valores)

Crie a estrutura mínima válida de um documento HTML5 que contenha:

- Codificação UTF-8  
- Um título chamado **"Tecnologias Web"**  
- Um parágrafo com o texto **"Introdução ao HTML"**
<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<title>Tecnologias WEB</title>
<head>
<body>
<p>Introdução ao HTML</p>
</body>
</html>
---

### 7. Listas e Sublistas (2 valores)

Crie uma lista **não ordenada** com os seguintes itens:

- Frontend  
  - HTML  
  - CSS  
  - JavaScript  
- Backend  

Garanta o correto **encadeamento das tags**.
<ul>
<li>Frontend</li>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>
<li>Backend</li>
</ul>

---

### 8. Tabelas (2,5 valores)

Crie uma tabela que represente a seguinte informação:

| Nome | Curso | Ano |
|----|------|----|
| Ana | EI | 1 |
| João | EI | 2 |

A tabela deve conter:
- `<caption>`
- `<thead>`
- `<tbody>`

<tabel>
<caption>Informação de Alunos</caption>
<thead>
<tr>
<th>Nome</th>
<th>Curso</th>
<th>Ano</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ana</td>
<td>EI</td>
<td>1</td>
</tr>
<tr>
<td>João</td>
<td>EI</td>
<td>2</td>
</tr>
</tbody>
</table>
---

### 9. Navegação e Hiperligações (2 valores)

a) Crie uma ligação absoluta para o site `https://www.isec.pt`.  
<a href="https://www.isec.pt">Texto da ligação</a>
b) Crie uma ligação relativa para uma página chamada `contactos.html`. 
<a href="contactos.html">Texto da ligação</a>
c) Crie uma navegação interna que leve para uma secção com o id `topo`.
<a href="#topo">Voltar ao topo</a>

---

### 10. Formulários (2,5 valores)

Crie um formulário que contenha:

- Um campo de texto para **nome** (obrigatório)  
- Um campo de email com validação automática  
- Um campo de data limitado ao intervalo `2025-01-01` a `2025-12-31`  
- Um botão de submissão  

O formulário deve utilizar o método **POST**.
<form action="/submit_page" method="POST">
    <label for="name">Nome (obrigatório):</label>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email (com validação automática):</label>
    <input type="email" id="email" name="email"><br><br>

    <label for="date">Data (intervalo 2025-01-01 a 2025-12-31):</label>
    <input type="date" id="date" name="date" min="2025-01-01" max="2025-12-31"><br><br>

    <input type="submit" value="Submeter">
</form>

---

### 11. Embedded Content (1 valor)

Explique a função da tag `<iframe>` e indique **uma situação prática** onde seja utilizada.
 - A tag iframe é um elemento que serve para inserir outro documento no documento HTML atual. Uma situação para usar o iframe é incorporar videos do youtube numa página web.

---

## ⭐ Questão Extra – Clean HTML e Otimização (Bónus – 1 valor)

Indique **duas boas práticas de Clean HTML** e **uma técnica de otimização HTML** que contribua para melhorar o tempo de carregamento de uma página.
 - Duas boas práticas de Clean HTML são a utilização de semântica correta e a indentação e organização do código. Uma técnica de otimização HTML para melhorar o tempo de carregamento é a minificação do código.

---

### 🔚 Fim do Simulado
Se quiseres, no próximo passo posso:

✅ Fazer a resolução completa comentada

🧪 Criar uma versão estilo Moodle

📄 Adaptar exatamente ao modelo de exame do ISEC

🔁 Criar um simulado misto (HTML + CSS + JS)

Diz como queres continuar 👍