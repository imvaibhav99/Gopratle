# Deployment Guide

This guide outlines the steps to deploy the **GoPratle** application.

## Prerequisites

- Application code pushed to GitHub (already done).
- Accounts on [Vercel](https://vercel.com) and [Render](https://render.com).
- MongoDB Connection String (from MongoDB Atlas).

---

## Part 1: Deploy Backend to Render

1. **Log in to Render** and go to the Dashboard.
2. Click **"New +"** and select **"Web Service"**.
3. **Connect GitHub**:
   - If not connected, link your GitHub account.
   - Select the `Gopratle` repository.
4. **Configure the Service**:
   - **Name**: `gopratle-backend` (or any unique name).
   - **Region**: Choose one close to you or your database.
   - **Branch**: `main`.
   - **Root Directory**: `backend` (Important!).
   - **Runtime**: `Node`.
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. **Environment Variables**:
   - Click "Environment" or scroll down to "Environment Variables".
   - Add `MONGO_URI`: Your MongoDB connection string.
   - *Note*: `PORT` is automatically set by Render, and your code is already set up to use it.
6. **Network Access (MongoDB)**:
   - Ensure your MongoDB Atlas cluster allows connections from anywhere (`0.0.0.0/0`) since Render IPs change, or look up how to whitelist Render IPs.
7. **Deploy Web Service**:
   - Click **"Create Web Service"**.
   - Wait for the build to finish.
   - Once live, copy the **Backend URL** (e.g., `https://gopratle-backend.onrender.com`). You will need this for the frontend.

---

## Part 2: Deploy Frontend to Vercel

1. **Log in to Vercel** and go to the Dashboard.
2. Click **"Add New..."** > **"Project"**.
3. **Import Git Repository**:
   - Select the `Gopratle` repository.
4. **Configure Project**:
   - **Project Name**: `gopratle-frontend`.
   - **Framework Preset**: `Next.js` (should be auto-detected).
   - **Root Directory**: Click "Edit" and select `frontend`.
5. **Environment Variables**:
   - Expand the **"Environment Variables"** section.
   - Add `NEXT_PUBLIC_API_URL`.
   - Value: The **Backend URL** from Render with `/api` appended (e.g., `https://gopratle-backend.onrender.com/api`).
   - *Important*: Ensure you add `/api` at the end if your backend routes are prefixed with it (which they are).
6. **Deploy**:
   - Click **"Deploy"**.
   - Vercel will build and deploy your site.
7. **Verify**:
   - Once deployed, visit the provided URL.
   - Test the form to ensure it connects to the backend correctly.

---

## Troubleshooting

- **CORS Errors**: If you see CORS errors in the browser console, check your backend `src/app.js` or `server.js`. Ensure the CORS configuration allows the frontend domain.
  - *Quick Fix*: Set `origin: '*'` in `cors` options in `backend/src/app.js` temporarily if you don't know the Vercel URL beforehand.
- **Database Connection**: Check Render logs if the backend fails to start. It usually means the `MONGO_URI` is incorrect or the IP is blocked.
