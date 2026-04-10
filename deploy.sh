export VITE_API_BASE_URL=http://localhost:3000
export CORS_ORIGIN=http://localhost,http://127.0.0.1
export DB_TYPE=mysql
export DB_HOST=mysql
export DB_PORT=3306
export DB_NAME=app_db
export DB_USER=app_user
export DB_PASSWORD=app_password
export DB_ROOT_PASSWORD=root_password

docker compose up -d --build