# Sales Insight Automator 🚀



AI-powered **Sales Data Analysis Platform** that converts raw CSV/Excel sales data into **executive summaries automatically**.



The system allows users to upload datasets, process them using an AI model, and receive **professional business insights instantly**.



---



## ✨ Features



* 📂 Upload **CSV / Excel sales datasets**

* 🤖 AI-generated **executive summary**

* 📧 Automatic **email delivery of insights**

* 📊 API documentation via **Swagger**

* 🐳 **Dockerized backend**

* ⚙️ **CI pipeline using GitHub Actions**

* 🔐 Environment-based configuration



---



## 🏗 Architecture



User Upload

↓

Express API

↓

Parser Service (CSV / Excel)

↓

AI Service (Groq LLM)

↓

Email Service

↓

Executive Summary Sent



---



## 📁 Project Structure



```

sales-insight-automator

│

├── .github/workflows

│   └── backend-ci.yml        # GitHub Actions CI pipeline

│

├── backend

│   ├── src

│   │   ├── config            # App configuration

│   │   ├── middleware        # Express middleware

│   │   ├── services

│   │   │   ├── ai            # AI summary generation

│   │   │   ├── email         # Email service

│   │   │   ├── parser        # File parsing logic

│   │   │   └── upload        # Upload API

│   │   ├── app.ts            # Express configuration

│   │   └── server.ts         # Server entry point

│   │

│   ├── Dockerfile

│   ├── .dockerignore

│   ├── package.json

│   └── tsconfig.json

│

└── README.md

```



---



## ⚙️ Tech Stack



Backend



* Node.js

* Express.js

* TypeScript



AI



* Groq API (Llama Models)



DevOps



* Docker

* GitHub Actions CI



Utilities



* Multer (file upload)

* Swagger UI (API documentation)



---



## 📡 API Endpoints

### Show Swagger Report

GET `/api/docs`


### Upload Dataset



POST `/api/upload`



Upload a CSV/Excel dataset to generate an AI summary.



Example using curl:



```

curl -X POST http://localhost:5000/api/upload \

  -F "file=@sales-data.csv" \

  -F "email=user@example.com"

```



---



### API Documentation



Swagger UI available at:



```

http://localhost:5000/api/docs

```



---



## 🚀 Getting Started



### 1️⃣ Clone the Repository



```

git clone https://github.com/SubhradipMishra/sales-insight-automator.git

cd sales-insight-automator/backend

```



---



### 2️⃣ Install Dependencies



```

npm install

```



---



### 3️⃣ Setup Environment Variables



Create a `.env` file:



```

PORT=5000



GROQ_API_KEY=your_groq_api_key



EMAIL_USER=your_email

EMAIL_PASS=your_email_password

```



---



### 4️⃣ Run Development Server



```

npm run dev

```



Server will start at:



```

http://localhost:5000

```



---



## 🐳 Run with Docker



Build image:



```

docker build -t sales-insight-backend .

```



Run container:



```

docker run -p 5000:5000 --env-file .env sales-insight-backend

```



---



## ⚙️ CI Pipeline



CI is configured using **GitHub Actions**.



Pipeline steps:



1. Checkout repository

2. Install dependencies

3. Build TypeScript

4. Build Docker image



Workflow file:



```

.github/workflows/backend-ci.yml

```



---



## 🔐 Security Best Practices



* Secrets stored in `.env`

* `.env` excluded using `.gitignore`

* API keys not committed to repository



---



## 📈 Future Improvements



* Redis queue for async AI processing

* AWS S3 file storage

* Automated deployment pipeline

* Frontend dashboard for analytics

* Rate limiting for API protection



---



## 👨‍💻 Author



**Subhradip Mishra**



GitHub

https://github.com/SubhradipMishra



---



## ⭐ If you like this project



Give it a star on GitHub to support the project!


