FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Set environment variables
ENV PORT=5000
ENV DATABASE_URL="mongodb+srv://khanniloytahsin:besilen&hideyou%40293@cluster0.iiseuxv.mongodb.net/ecommerce?retryWrites=true&w=majority"
ENV JWT_SECRET_KEY="nanosoftit@2023"
ENV CLOUD_NAME="dn5hp7m7m"
ENV API_SECRET_KEY="732484287392262"
ENV API_SECRET="XCVrgUmj44TGJMmKXEKadMbqZrw"
ENV MAIL_ID="bizemail395@gmail.com"
ENV MAIL_PASS="xzocxvkibpbgixww"

EXPOSE 5000

CMD ["npm", "start"]