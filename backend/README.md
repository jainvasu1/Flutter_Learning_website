# Flutter Learning Platform — Backend

Node.js + Express REST API. JavaScript (ES modules).

## Run locally
cd backend
cp .env.example .env
npm install
npm run dev      # http://localhost:5000/api/health

## Structure (src/)
- server.js      Entry point: starts the HTTP server
- app.js         Express app: middleware, routes, error handling
- config/        Environment and app configuration
- routes/        URL → controller mapping (one file per resource)
- controllers/   Read the request, call a service, send the response
- services/      Business logic (no req/res here)
- models/        Database models / schemas
- middlewares/   Express middleware (auth, errors, 404)
- validators/    Request body / params validation
- utils/         Small shared helpers
- tests/         Tests

## Adding a feature (example: courses)
routes/course.routes.js → controllers/course.controller.js → services/course.service.js → models/course.model.js
Then mount it in routes/index.js.
