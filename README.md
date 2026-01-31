# GoPratle

GoPratle is a platform for posting event requirements, connecting planners, performers, and crew members. This application features a multi-step form for detailed requirement posting, categorized by hire type.

## Tech Stack

**Frontend:**
- Next.js 15 (React 19)
- Tailwind CSS v4
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

## Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:imvaibhav99/Gopratle.git
cd Gopratle
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following content:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
# OR for development with watch mode (Node v18+)
npm run dev
```

The backend server will start on `http://localhost:5001`.

### 3. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

Create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api
```

Start the frontend development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
GoPratle/
├── backend/            # Express.js backend
│   ├── src/
│   │   ├── config/     # Database configuration
│   │   ├── controllers/# Route controllers
│   │   ├── models/     # Mongoose models
│   │   ├── routes/     # API routes
│   │   ├── utils/      # Utility functions
│   │   └── server.js   # Entry point
│   └── .env            # Environment variables (gitignored)
│
├── frontend/           # Next.js frontend
│   ├── app/            # App router pages
│   ├── components/     # Reusable UI components
│   ├── lib/            # API client and utilities
│   └── .env.local      # Environment variables (gitignored)
│
└── README.md           # Project documentation
```

## Features

- **Multi-step Form**: Easy-to-use wizard for posting requirements.
- **Dynamic Fields**: Fields change based on the selected hire type (Planner, Performer, Crew).
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS.
