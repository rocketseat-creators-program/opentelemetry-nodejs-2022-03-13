## OpenTelemetry com Node.js

<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

Conforme nossas aplicações crescem, é fundamental termos formas de saber o que está acontecendo com elas, seja para acompanhar performance ou resolver problemas. Observabilidade se torna um assunto cada vez mais presente no nosso cotidiano.

Quem já trabalhou com APMs ou outras ferramentas de observabilidade sabe que cada um funciona de um jeito, e na maioria das vezes acabamos tendo que mudar o código da nossa aplicação quando trocamos de ferramenta. O OpenTelemetry surge como um conjunto de ferramentas que nos proporciona um padrão para observabilidade, o que faz com que não tenhamos que saber tantas especificidades das ferramentas.

Nesta aula vemos como é simples adicionar traces e métricas usando um collector de OpenTelemetry em uma aplicação Node.js.

## Expert

| [<img src="https://avatars.githubusercontent.com/u/711732?s=460&u=6b1039f8a921c5733d92d13b2971c55157fee005&v=4" width="75px;"/>](https://github.com/askmon) |
| :-: |
|[André Spanguero Kanayama](https://github.com/askmon)|


### Requisitos

- Node.js v14 (`.nvmrc` incluso no projeto)
- Um banco PostgreSQL (existe um docker-compose no projeto, para quem quiser rodar usando Docker)
- Docker e docker-compose

### Como rodar

0. Antes de tudo, rode o comando `npm install`;
0. Caso queira rodar o banco localmente com Docker, pode-se utilizar o comando `docker-compose up` para subir o banco;
0. Renomeie o arquivo `.env.example` para `.env` e edite as variáveis para conexão com o banco;
0. Rode o comando `npm run sequelize:migrate` para gerar as tabelas;
0. Rode o comando `npm run sequelize:seed` para criar dados de exemplo nas tabelas;
0. Rode o comando `npm run dev` para rodar o projeto usando nodemon.
