#  Trampo Livre

**Trampo Livre** é uma plataforma web de intermediação entre contratantes e freelancers/prestadores de serviço, criada como **Trabalho final** do curso Técnico integrado ao Ensino Médio do **IFG (Instituto Federal de Goiás)**.

O projeto reúne, em um único site, os principais conhecimentos desenvolvidos ao longo dos 3 anos de curso: HTML, CSS, JavaScript, Node.js/Express e manipulação de dados no back-end.

---

##  Sobre o projeto

A ideia do Trampo Livre é conectar pessoas que precisam contratar serviços (diaristas, cozinheiros, jardineiros, mecânicos, desenvolvedores, profissionais de marketing, entre outros) com quem oferece esses serviços como freelancer.

O site permite:

- Visualizar vagas/serviços disponíveis, com descrição, requisitos, benefícios e localização;
- Cadastrar novos usuários (como **anunciador** de vaga ou **procurador** de vaga);
- Fazer login;
- Anunciar uma vaga através de um formulário de contratante;
- Consultar informações de contato e dicas/recursos para freelancers (como montar currículo, como se comportar com o cliente, etc.).

---

##  Funcionalidades

- **Página inicial** com apresentação do site (`Index.html`)
- **Cadastro de usuário** com tipo de perfil (`cadastro.html`)
- **Login de usuário** (`login.html`)
- **Anúncio de vagas** por contratantes (`Anunciar_Vagas.html`)
- **Listagem de freelancers/vagas** disponíveis (`Freelancers.html`)
- **Páginas de detalhes de cada vaga**, com descrição, requisitos e benefícios:
  - Desenvolvedor Full Stack (`fullstack.html`)
  - Cozinheiro Particular (`cozinheiro.html`)
  - Diarista (`diarista.html`)
  - Jardineiro (`jardineiro.html`)
  - Mecânico (`mecanico.html`)
  - Especialista em Marketing Digital (`esmarketingdg.html`)
- **Página de recursos** com dicas para freelancers (`Recursos.html`)
- **Página de contato** (`Contatos.html`)
- **Perfil de usuário** (`Usuario.html`)
- **Gerenciamento de vagas** via API (`vagas.html`)
- **API REST** simples feita em Node.js/Express para cadastro, login e CRUD de vagas (`app.js`)

---

##  Tecnologias utilizadas

**Front-end**
- HTML5
- CSS3
- [Bootstrap 5.3.3](https://getbootstrap.com/) (via CDN)
- JavaScript (manipulação de formulários e requisições `fetch`)

**Back-end**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- Armazenamento simples de dados em arquivo (`db/db.json`)

---

##  Estrutura do projeto

```
trampo-livre/
├── app.js                  # Servidor Express com as rotas da aplicação (cadastro, login, vagas)
├── index.js                # Servidor Express básico (ponto de partida do projeto)
├── package.json            # Dependências e scripts do projeto
├── Styles.css              # Estilos gerais do site
├── db/
│   └── db.json             # "Banco de dados" em arquivo, usado pelo app.js
├── Index.html               # Página inicial
├── login.html                # Página de login
├── cadastro.html              # Página de cadastro de usuário
├── Anunciar_Vagas.html         # Formulário para anunciar uma vaga
├── Freelancers.html             # Listagem de vagas/freelancers
├── Usuario.html                  # Perfil do usuário
├── vagas.html                     # Gerenciamento de vagas (consome a API)
├── Recursos.html                   # Dicas para freelancers
├── Contatos.html                    # Página de contato
├── fullstack.html                    # Detalhe da vaga: Dev Full Stack
├── cozinheiro.html                    # Detalhe da vaga: Cozinheiro
├── diarista.html                       # Detalhe da vaga: Diarista
├── jardineiro.html                      # Detalhe da vaga: Jardineiro
├── mecanico.html                         # Detalhe da vaga: Mecânico
└── esmarketingdg.html                     # Detalhe da vaga: Marketing Digital
```

> **Observação:** o projeto conta com dois arquivos de servidor (`app.js` e `index.js`). O `package.json` aponta `index.js` como arquivo principal, mas as funcionalidades de cadastro/login/vagas estão implementadas em `app.js`. Ao rodar o projeto, use o arquivo que contém as rotas da API (`app.js`).

---

##  Como rodar o projeto localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 14 ou superior recomendada)

### Passo a passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/trampo-livre.git
   cd trampo-livre
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Certifique-se de que existe a pasta `db` com o arquivo `db.json` (usado como base de dados). Caso não exista, crie:
   ```bash
   mkdir db
   echo "[]" > db/db.json
   ```

4. Inicie o servidor:
   ```bash
   node app.js
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

##  Rotas da API

| Método | Rota            | Descrição                          |
|--------|-----------------|-------------------------------------|
| POST   | `/api/cadastro`  | Cadastra um novo usuário            |
| POST   | `/api/login`     | Autentica um usuário existente      |
| GET    | `/api/vagas`     | Lista todas as vagas cadastradas    |
| POST   | `/api/vagas`     | Cadastra uma nova vaga              |

---

##  Contexto acadêmico

Este projeto foi desenvolvido como **Trabalho de Conclusão de Curso** do Ensino Médio Técnico Integrado do **Instituto Federal de Goiás (IFG)**, reunindo os conhecimentos de desenvolvimento web adquiridos ao longo dos 3 anos de curso.

