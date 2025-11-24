# Usa a imagem oficial do Node.js.
FROM node:20-alpine

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /usr/src/app

# Copia package.json e package-lock.json para instalar dependências.
COPY package*.json ./

# Instala as dependências do projeto.
RUN npm install

# Copia o restante do código da aplicação para o diretório de trabalho.
COPY . .

# A porta que a aplicação Node.js escuta.
EXPOSE 3000

# Comando para iniciar a aplicação.
CMD [ "npm", "start" ]