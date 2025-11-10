
README
# Estudo de Caso - Desenvolvimento Profissional

## Descrição do Projeto
Este projeto consiste em uma aplicação dividida em **Web** (React + Vite) e **Mobile** (React Native + Expo) que consome uma **API REST de produtos**.  
O objetivo é listar produtos, visualizar detalhes e praticar conceitos de rotas, navegação e consumo de API.

---

## Estrutura do Projeto

/meu-estudo-caso
├── web/ → Aplicação web React + Vite
└── mobile/ → Aplicação mobile React Native + Expo

---

## Tecnologias Utilizadas

**Web**
- React 18
- Vite
- React Router DOM
- Axios
- Bootstrap / React Bootstrap

**Mobile**
- React Native
- Expo
- React Navigation
- Axios
- React Native Paper (opcional)

---

## Rotas Implementadas (Web)

| Rota              | Componente         | Descrição                        |
|------------------|-----------------|---------------------------------|
| `/`              | Home             | Lista de todos os produtos       |
| `/produto/:id`   | Produto          | Detalhes de um produto específico|

---

## Instruções de Instalação e Execução

### Web (React + Vite)

1. Navegue até o diretório `web`:
```bash
cd web
2.	Instale as dependências:
npm install
3.	Execute a aplicação:
npm run dev
4.	Acesse no navegador:
http://localhost:5173/
________________________________________
Mobile (React Native + Expo)
1.	Navegue até o diretório mobile:
cd mobile
2.	Instale as dependências:
npm install
3.	Rode o projeto no Expo:
npx expo start
4.	Abra no simulador ou no seu celular via QR code.
________________________________________
Passos para Rodar Localmente
1.	Clone o repositório:
git clone https://github.com/SEU_USUARIO/meu-estudo-caso.git
2.	Entre no projeto:
cd meu-estudo-caso
3.	Siga as instruções de instalação e execução para web ou mobile conforme desejado.
________________________________________
Créditos e Referências
•	React
•	Vite
•	React Native
•	Expo
•	Bootstrap
•	API REST fornecida pelo professor: https://proweb.leoproti.com.br/produtos

link publicado no vercel https://meu-estudo-caso-2-atual-git-main-luanas-projects-7e64c17d.vercel.app/