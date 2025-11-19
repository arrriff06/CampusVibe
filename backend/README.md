# Campus-Vibe Backend

## Setup
1. npm install
2. create `.env` (see .env.example)
3. mkdir -p public/uploads
4. npm run dev

## Available routes
- POST /api/auth/register
- POST /api/auth/login
- GET  /api/events
- POST /api/events (protected; send banner as form-data field `banner`)
- GET  /api/photos
- POST /api/photos/upload (multipart form-data, images field name `images`)
- POST /api/participation
