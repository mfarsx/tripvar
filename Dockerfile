FROM node:18-alpine

# Temel gereksinimler
RUN apk add --no-cache \
    git \
    curl \
    python3 \
    make \
    g++

WORKDIR /app

# Package dosyalarını kopyala
COPY package*.json ./

# npm cache temizle ve bağımlılıkları yükle
RUN npm cache clean --force && \
    npm install

# Kaynak kodları kopyala
COPY . .

# Gatsby cache temizle
RUN npm run clean

# Portları aç
EXPOSE 8000 9929

# Development sunucusunu başlat
CMD ["npm", "run", "develop", "--", "--host", "0.0.0.0"] 