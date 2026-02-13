📄 KaniCV – AI Resume Builder
KaniCV is a full-stack AI-powered resume builder that allows users to create, edit, enhance, and manage professional resumes with modern templates.

✨ Features
User Authentication (JWT based)
Create, Edit & Delete Resumes
AI-powered:
  Professional Summary Enhancement
  Job Description Enhancement
Profile Image Upload (ImageKit integration)
Multiple Resume Templates
Accent Color Customization
Public / Private Resume Toggle
Shareable Public Resume Link
Resume Download (Print to PDF)
Dashboard to manage all resumes

🛠 Tech Stack
Frontend:
  React
  Redux Toolkit
  Tailwind CSS
  Axios

Backend:
  Node.js
  Express
  MongoDB (Mongoose)
  JWT Authentication
  OpenAI API
  ImageKit


🚀 Getting Started
1️⃣ Fork / Clone the Repository
git clone https://github.com/Kanish1012/KaniCV
cd KaniCV

2️⃣ Install Dependencies
Server:
cd server
npm install

Client:
cd client
npm install

3️⃣ Environment Variables
Create .env file inside server/ folder:
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net
JWT_SECRET=your_super_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
OPEN_AI_KEY=your_openai_api_key
OPEN_AI_BASE_URL=https://api.openai.com/v1
OPEN_AI_MODEL=gpt-4o-mini

Create .env file inside client/ folder:
VITE_BASE_URL=

4️⃣ Run the Project
Start Backend:
cd server
npm run dev

Start Frontend:
cd client
npm run dev
