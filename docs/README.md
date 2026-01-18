# 🌐 Portal de Estudo - Tecnologias Web

Um site interativo de estudo para a disciplina **Tecnologias Web**, com conteúdo completo sobre **CSS** e **JavaScript**.

## 📁 Estrutura de Ficheiros

```
docs/
├── index.html      # Página principal do portal
├── styles.css      # Estilos CSS do site
├── script.js       # Lógica JavaScript para navegação
└── README.md       # Este ficheiro
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente
1. Duplo-clique em `index.html` para abrir no navegador padrão

### Opção 2: Usar um Servidor Local (Recomendado)
Para evitar problemas de CORS, use um servidor local:

**Com Python 3:**
```bash
cd /workspaces/Exame_TWEB/docs
python3 -m http.server 8000
```
Depois aceda a: `http://localhost:8000`

**Com Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Com Node.js (http-server):**
```bash
npx http-server ./docs -p 8000
```

**Com VS Code Live Server:**
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## 📚 Conteúdo Disponível

### HTML (20 valores)
- ✅ Conceitos Fundamentais
- ✅ Elementos e Atributos
- ✅ Estrutura do Documento
- ✅ Tags Semânticas
- ✅ Listas e Sublistas
- ✅ Tabelas
- ✅ Formulários
- ✅ Navegação e Hiperligações
- ✅ Embedded Content
- ✅ Questões práticas resolvidas

### CSS (20 valores)
- ✅ Conceitos Fundamentais
- ✅ Ligação CSS/HTML
- ✅ Seletores CSS
- ✅ Especificidade e Conflitos
- ✅ Herança
- ✅ Pseudo-classes e Pseudo-elementos
- ✅ Box Model
- ✅ Display e Layouts
- ✅ Flexbox
- ✅ Questões práticas resolvidas

### JavaScript (20 valores)
- ✅ Linguagens de Script
- ✅ Execução no Browser
- ✅ Objetos e Eventos
- ✅ Variáveis e Tipos de Dados
- ✅ Scope e Keyword `this`
- ✅ Scripts e Eventos
- ✅ Variáveis e Condicionais
- ✅ Arrays e Loops
- ✅ Objetos e Métodos
- ✅ Funções e Arrow Functions
- ✅ Bónus: Classes e Herança

## 🎨 Características

- **Menu Lateral Interativo:** Navegação rápida entre tópicos
- **Índice Dinâmico:** Sumário de conteúdos com scroll automático
- **Design Responsivo:** Funciona em desktop, tablet e mobile
- **Tabelas Comparativas:** Visualização clara de conceitos
- **Exemplos de Código:** Blocos de código formatados
- **Animações Suaves:** Transições agradáveis entre páginas

## 🔧 Personalizações

### Modificar Cores
Edite `styles.css` e altere os valores de cores:
- `#667eea` - Cor primária (roxo)
- `#764ba2` - Cor secundária (roxo escuro)
- `#2c3e50` - Cor da barra lateral

### Adicionar Novos Tópicos
1. Abra `index.html`
2. Adicione um novo item no menu:
```html
<li><a href="#" class="nav-link" data-page="novo-topico">Novo Tópico</a></li>
```
3. Crie uma nova secção:
```html
<div id="novo-topico" class="page">
  <!-- Conteúdo aqui -->
</div>
```
## 🔄 Atualizado para incluir:
✅ Página completa de HTML
✅ Conteúdo de HTML5 e tags semânticas
✅ Exemplos de código formatados
✅ Menu navegável com 3 disciplinas
✅ Índices interativos com scroll automático
## 📱 Suporte a Navegadores

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📝 Dicas de Estudo

1. **Leia na ordem:** Comece pela Home para compreender a estrutura
2. **Use o Índice:** Aceda diretamente aos tópicos desejados
3. **Estude o Código:** Todos os exemplos são reais e testáveis
4. **Faça Anotações:** Use as perguntas como guia de estudo
5. **Revise Regularmente:** Volte aos tópicos difíceis frequentemente

## 🐛 Problemas Conhecidos

- Se o site não abrir, tente usar um servidor local (veja acima)
- Se as imagens não carregarem, verifique os caminhos dos ficheiros

## 📧 Sugestões

Este portal foi criado para auxiliar no estudo de Tecnologias Web. 
Sinta-se livre para adaptar e expandir o conteúdo conforme necessário!

---

**Última Atualização:** Janeiro 2026
**Versão:** 1.1.0
**Cotação Total:** 60 valores (HTML 20 + CSS 20 + JavaScript 20)
**Duração Total:** 270 minutos (4,5 horas)
