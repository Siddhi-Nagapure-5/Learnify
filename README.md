# 🚀 AI-Powered Learning Path Generator – Learnify

A full-stack web app that generates customized, weekly learning roadmaps using GPT based on your goals like _"Become a Full-Stack Developer in 3 months."_ Built with the **MERN Stack** + OpenAI API.

---

## 🧠 Features

- 🎯 User inputs a learning goal and time duration
- 🤖 GPT generates a detailed weekly roadmap
- 🔐 Secure user authentication (Register/Login)
- 🧾 Personalized Dashboard & Profile
- 📌 Save and revisit generated roadmaps

---

## 💻 Tech Stack

- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js, MongoDB
- **Auth**: JWT (JSON Web Tokens)
- **AI**: OpenAI (GPT-3.5/4 API integration)
- **Extras**: `html2pdf.js` for exporting to PDF

---

## 🔧 Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/ai-learning-path.git
cd ai-learning-path

```
### 2. Install dependencies
Frontend:
```bash
cd client
npm install
```
Backend:
```bash
cd server
npm install
```
### 3. Configure Environment Variables
Create a .env file in the server folder:
```bash
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_api_key
```
### 4. Start Development Server
Backend:
```bash
node server.js
```
Frontend:
```bash
cd client
npm run dev
```
### Screenshots
![Screenshot 2025-06-27 222203](https://github.com/user-attachments/assets/230a28fd-107a-4d58-acbf-6b6030d6d7e8)


### 📌 Future Enhancements
    1)  Quiz module for knowledge checks
    2)  Progress tracking & milestones
    3)  Light/dark theme toggle
    4)  GitHub auth integration

### 📬 Contact
    
    Made with ❤️ by Siddhi Nagapure
