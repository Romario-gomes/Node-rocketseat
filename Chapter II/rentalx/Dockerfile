FROM node

#Diretório onde eu quero criar
WORKDIR /usr/app

#Copiar para instalar todas as dependencias
COPY package.json ./

#Fazer a instalação
RUN npm install

COPY . .

#PORTA
EXPOSE 3333

CMD ["npm", "run", "dev"]