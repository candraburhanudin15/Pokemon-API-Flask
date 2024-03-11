# Menggunakan node versi LTS sebagai base image
FROM node:lts-alpine

# Menentukan direktori kerja di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Menginstall dependencies yang diperlukan
RUN npm install

# Menyalin seluruh kode sumber ke dalam container
COPY . .

# Menjalankan perintah build untuk aplikasi Next.js
RUN npm run build

# Menjalankan aplikasi Next.js
CMD ["npm", "start"]
