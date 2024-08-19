# Google Drive Integration - Backend

## Overview

This is the backend for a Google Drive integration application. It handles user authentication via OAuth 2.0 and provides API endpoints to interact with Google Drive, including file upload, listing, downloading, and deletion.

## Features

- OAuth 2.0 Authentication
- File Upload to Google Drive
- List Files from Google Drive
- Download Files from Google Drive
- Delete Files from Google Drive

## Prerequisites

- **Node.js** (v14.x or higher)
- **NPM** (v6.x or higher)
- **Google Cloud Project** with OAuth 2.0 credentials

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ezio-devtech/backend-google-drive.git
cd backend-google-drive
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables
Create an env file in the root of your project and add your Google OAuth 2.0 credentials:

```bash
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:5000/auth/google/callback
PORT=5000
```

### 4. Start the Server

```bash
npm run dev
```
The server will run on http://localhost:5000.

## API Endpoints
### Authentication
GET /auth/google: Initiate OAuth 2.0 authentication with Google.
GET /auth/google/callback: Handle the callback from Google OAuth 2.0.
### Google Drive Operations
POST /api/drive/upload: Upload a file to Google Drive. (file field in multipart form-data)
GET /api/drive/files: List files in Google Drive.
GET /api/drive/download/:fileId: Download a file from Google Drive.
DELETE /api/drive/delete/:fileId: Delete a file from Google Drive.
### Middleware
authenticateGoogle: Verifies that the user is authenticated before allowing access to Drive operations.