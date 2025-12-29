# fullstack-chat-app
A real-time chat application built with the MERN stack and Socket.IO, featuring live messaging, online presence, and a clean, responsive UI using Tailwind CSS and DaisyUI.


## 🚀 Tech Stack

- Frontend: React (Vite), Tailwind CSS, DaisyUI
- Backend: Node.js, Express.js
- Database: MongoDB
- Real-time: Socket.IO
- State Management: Zustand

## ✨ Features

- Real-time messaging using Socket.IO
- Online and offline user presence
- Responsive and modern UI
- Single backend server serving both API and frontend
- Clean and scalable project structure

## 🏗 Project Structure

### 📁 Project Structure

```bash
CHAT-APP/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── lib/
│   ├── public/
│   ├── index.html
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

 




## 🔌 Real-Time Architecture

- Client connects to the server using Socket.IO
- User ID is sent during socket handshake
- Server tracks online users using socket ID mapping
- Online status updates are broadcast in real time

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder and add the following:

```env
MONGODB_URI=
PORT=
JWT_SECRET=
NODE_ENV=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```


## 🛠 Installation & Running Locally

### Development

```bash
cd backend
npm install

cd ../frontend
npm install

cd ../backend
npm run dev

cd ../frontend
npm run dev
```


