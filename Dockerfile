# Используем официальный образ Node.js для сборки React-приложения
FROM node:14 as build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения в рабочую директорию
COPY . .

# Собираем React-приложение
RUN npm run build

# Используем официальный образ Node.js для запуска React-приложения
FROM node:14

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем собранное React-приложение из предыдущего образа
COPY --from=build /app/build ./build

# Устанавливаем serve для запуска собранного приложения
RUN npm install -g serve

# Выполняем команду по открытию портов
EXPOSE 3000

# Запускаем React-приложение
CMD ["serve", "-s", "build", "-l", "3000"]