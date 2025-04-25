# 🚀 ExpressJS Backend Boilerplate

## 📦 Project Structure

```
.
├── config/               # App configuration (dev/prod)
├── controllers/          # Route controllers
├── models/               # Business logic (DB queries)
├── routes/               # API route handlers
├── services/             # MySQL connection & utilities
├── index.js              # Main Express entry point
└── README.md             # This file
```

---

## ⚙️ Environment Setup

1. **Clone the repository**

```bash
git clone https://github.com/armandAbecilla/express-esm-boilerplate.git
cd express-esm-boilerplate
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file** for sensitive config:

```
NODE_ENV=development
PORT=3000
DATABASE_URL=mysql://user:password@localhost:3306/dbname
```

> You can also configure values inside `config/config.js` based on `NODE_ENV`.

---

## ▶️ Running the App

### For local development:

```bash
npm start
```

The API will be available at:  
**http://localhost:3000**

---

## 📡 API Routes

| Endpoint | Method | Description |
| -------- | ------ | ----------- |
| `/test`  | `GET`  | Test route  |
|          |        |             |

---

## 🗃️ Adding Routes

1. Create a route in `routes/`
2. Link a controller from `controllers/`
3. Register the router in `index.js` like so:

```js
import myRouter from './routes/my_router.js';
app.use('/api/my-route', myRouter);
```

---

## 🛠️ Development Notes

- All code uses **ES Modules** (via `"type": "module"` in `package.json`)
- Uses **async/await** pattern with error-handling middleware
- Follows MVC structure: route → controller → model/service

---

## 🚫 .gitignore Notes

This project ignores:

- `node_modules/`
- `.env` files
- logs, OS cache files
- image uploads and frontend build folders

---

## 📚 Future Ideas

- Add Swagger for API docs
- Use TypeScript or Zod for input validation
- Add rate-limiting and JWT auth

---

## 💬 Contributing

PRs and feature suggestions welcome! Fork the repo and create a feature branch to contribute.

---

## 🧾 License

MIT © Armand Abecilla
