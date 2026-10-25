# Receta para armar la app en un contenedor (la usan Dokploy y Tero, entre otros)
FROM node:22-alpine

WORKDIR /app

# Primero solo las dependencias, así Docker las reutiliza si no cambiaron
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Después el código
COPY src ./src

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Corre como usuario sin privilegios, no como root
USER node

CMD ["node", "src/index.js"]
