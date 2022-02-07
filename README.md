<h1 align="center">
    <img alt="DevRadar" src=".github\logo.png" width="100px" />
</h1>

<h2 align="center">
  🚀 Semana Omnistack 10
</h2>


<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Django](https://www.djangoproject.com/)
- [Django-Rest-Framework](https://www.django-rest-framework.org/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Projeto
**DevRadar é uma aplicação que lista desenvolvedores por localização**

## Instalação
### Pré requisitos
Ter instalado:
- [Python](https://www.python.org/downloads/)
- [Node](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

### Backend
#### Primeiro: modificar variáveis de ambiente (se houver)
-  **_backend/setup/env_example.py_**

#### No terminal, rodar
```sh
# Entrar na pasta dos arquivos do backend
cd backend

# Renomear env_example.py para env.py
cp setup/env_example.py setup/env.py

# Criar um ambiente virtual
python -m venv venv

# Ativar o ambiente virtual
. venv/Scripts/activate
# ou ./venv/bin/activate

# Instalar os pacotes necessários
pip install -r requirements.txt

# Executar as migrações
python manage.py migrate

# Rodar backend
python runserver.py
```

### Frontend
#### No terminal, rodar
```sh
# Entrar na pasta dos arquivos do frontend
cd frontend

# Instalar os pacotes necessários
yarn install

# Rodar
yarn start
```
#### Páginas
<div align="center">
    <img alt="Devs Page" title="Devs Page" src=".github/web_1.png?raw=true" width="600px" />
</div>
<p align="center">Devs Page</p>
<hr>

### Mobile
#### No terminal, rodar
```sh
# Entrar na pasta dos arquivos do projeto mobile
cd mobile

# Instalar os pacotes necessários
yarn install

# Rodar
expo start
```

#### Rodar expo no celular
- Abrir expo no celular
- Ler QR code e executar o app

#### Telas
<div align="center">
    <img alt="Splash" title="Splash" src=".github/mobile_1.jpeg" width="300px" />
</div>
<p align="center">Devs Map</p>
<hr>
