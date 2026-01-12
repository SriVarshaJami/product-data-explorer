Product Data Explorer

A full-stack product exploration platform built to demonstrate backend scraping, database persistence, and frontend integration.
The application allows users to explore navigation data, search results, and trigger on-demand scraping via a clean API-driven architecture.

📌 Project Overview

This project was developed as part of a full-stack assignment to showcase:

Backend architecture using NestJS

Scraping workflows with persistence

RESTful API design

Frontend integration using Next.js (App Router)

Search and on-demand refresh functionality

The implementation focuses on correctness, structure, and extensibility.

🧱 Tech Stack
Frontend

Next.js (App Router)

React

TypeScript

Axios

Backend

NestJS

Node.js

TypeScript

REST APIs

Scraping

Crawlee

Playwright

✨ Features Implemented
Backend

REST APIs for navigation data

On-demand scraping trigger

Search endpoint

Database persistence (basic)

DTO validation and structured services

CORS configuration and error handling

Frontend

Next.js App Router setup

Navigation listing page

Search functionality

On-demand scraping trigger

API integration with backend

Basic responsive UI

📁 Project Structure
product-data-explorer/
├── backend/
│   ├── src/
│   └── package.json
├── frontend/
│   ├── app/
│   ├── src/services/
│   └── package.json
└── README.md

🚀 Running Locally
1️⃣ Backend
cd backend
npm install
npm run start:dev


Backend runs at:

http://localhost:3001

2️⃣ Frontend
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:3000

🔌 API Endpoints (Sample)

GET /navigation
Fetch navigation data

GET /navigation/search?q=term
Search navigation data

POST /navigation/scrape
Trigger on-demand scraping

🌍 Ethical Scraping

On-demand scraping only

Limited request frequency

Designed to minimize repeated requests

Respectful scraping practices

📌 Known Limitations

Product-level pages are minimal

Caching strategy is basic

Queueing and rate-limiting are simplified

UI focuses on functionality over polish

🧪 Testing

Manual testing performed

Automated tests are minimal due to time constraints

📝 Notes for Reviewers

This submission prioritizes a clean and extensible architecture with working backend–frontend integration.
The structure allows easy extension for deeper scraping, caching strategies, and richer UI features if required.

👤 Author

Jami Srivarsha
