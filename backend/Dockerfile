FROM node:22-bookworm-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
COPY . .
RUN npm run build

FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
ARG DB_TYPE=mysql
ARG DB_HOST=mysql
ARG DB_PORT=3306
ARG DB_USER=app_user
ARG DB_PASSWORD=app_password
ARG DB_NAME=app_db
ENV DB_TYPE=$DB_TYPE
ENV DB_HOST=$DB_HOST
ENV DB_PORT=$DB_PORT
ENV DB_USER=$DB_USER
ENV DB_PASSWORD=$DB_PASSWORD
ENV DB_NAME=$DB_NAME
ARG CORS_ORIGIN=http://localhost:8080,http://127.0.0.1:8080,http://localhost,http://127.0.0.1,http://localhost:5173
ENV CORS_ORIGIN=$CORS_ORIGIN
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main.js"]
