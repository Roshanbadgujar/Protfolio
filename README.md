## Portfolio App (Next.js + MongoDB)

Ye project aapke personal portfolio ke liye hai jisme contact form ka data MongoDB me save hota hai. Frontend + backend dono Next.js (App Router) me integrated hai.

**Folder Structure**
```
.
├─ src/
│  ├─ app/
│  │  ├─ api/
│  │  │  └─ contact/
│  │  │     └─ route.ts
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ globals.css
│  ├─ components/
│  ├─ lib/
│  │  └─ mongodb.ts
│  └─ models/
│     └─ ContactMessage.ts
├─ package.json
└─ .env.example
```

**Tech Stack**
1. Fullstack: Next.js (App Router)
2. UI: React + Tailwind
3. Database: MongoDB (Mongoose)

## Local Setup

**1) Install**
```
npm install
```

**2) Env file**
`.env.example` ko copy karke `.env` bana lo aur values set karo:
```
MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority"
NEXT_PUBLIC_GEMINI_API_KEY="MY_GEMINI_API_KEY"
```

**3) Run (single terminal)**
```
npm run dev
```

App: `http://localhost:3000`  
API: `http://localhost:3000/api`

## API

**POST** `/api/contact`  
Body:
```
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

Response:
```
{ "ok": true, "id": "<mongo_id>" }
```

## Render Deployment (Single Service)

**Build Command**
```
npm install && npm run build
```

**Start Command**
```
npm run start
```

**Required Env Vars**
1. `MONGODB_URI` (MongoDB Atlas connection string)
2. `NODE_ENV=production`

Optional:
1. `NEXT_PUBLIC_GEMINI_API_KEY` (agar AI guide enable karna ho)

**Notes**
1. Next.js single server me frontend + API dono serve karta hai.
2. Contact form ka data `contactmessages` collection me save hota hai.

## Scripts
1. `npm run dev` - dev server
2. `npm run build` - production build
3. `npm run start` - production server
