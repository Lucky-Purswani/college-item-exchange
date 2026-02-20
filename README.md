<div align="center">

# 🎓 College Exchange — Backend

> A robust, scalable REST API powering the College Exchange platform — connecting students, listings, and opportunities.

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)
[![Status](https://img.shields.io/badge/Status-In%20Development-orange?style=flat-square)]()

</div>

---

<!--
## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Server](#running-the-server)
- [Architecture](#-architecture)
- [API Overview](#-api-overview)
- [Security](#-security)
- [Project Status](#-project-status)
- [Contributing](#-contributing)
- [License](#-license)

---
-->

## 🌟 Overview

**College Exchange** is a platform designed for college students to buy, sell, and exchange goods and services within their campus communities. This repository contains the **backend service** — handling authentication, data management, and business logic.

---

## 📦 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Runtime** | Node.js 18+ | Server-side JavaScript |
| **Framework** | Express 5 | HTTP routing & middleware |
| **ORM** | Prisma | Type-safe database access |
| **Database** | PostgreSQL | Relational data storage |
| **Auth** | JWT (Access + Refresh) | Stateless authentication |
| **Security** | bcrypt | Password hashing |
| **Config** | dotenv | Environment management |

---

## 📁 Project Structure

```
college-exchange/
│
├── src/
│   ├── config/
│   │   ├── env.js              # Environment variable loader & validator
│   │   └── prisma.js           # Prisma client singleton (dev-safe)
│   │
│   ├── controllers/            # ⏳ Request handlers (coming soon)
│   ├── routes/                 # ⏳ Route definitions (coming soon)
│   ├── services/               # ⏳ Business logic layer (coming soon)
│   ├── middlewares/            # ⏳ Custom middleware (coming soon)
│   │
│   ├── app.js                  # Express app setup & global middleware
│   └── server.js               # HTTP server bootstrap
│
├── prisma/
│   └── schema.prisma           # Database schema & models
│
├── .env.development.local      # Local dev environment (not committed)
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) `v9+`
- [PostgreSQL](https://www.postgresql.org/) `v14+`

---

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/college-exchange-backend.git
cd college-exchange-backend

# 2. Install dependencies
npm install

# 3. Generate Prisma client
npx prisma generate

# 4. Run database migrations
npx prisma migrate dev
```

---

### Environment Setup

Create a `.env.development.local` file in the root directory:

```bash
touch .env.development.local
```

Add the following variables:

```env
# ─── Database ────────────────────────────────────────
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/college_exchange

# ─── JWT Secrets (use long, random strings) ──────────
JWT_ACCESS_SECRET=your_super_strong_access_secret_here
JWT_REFRESH_SECRET=your_super_strong_refresh_secret_here

# ─── Server ──────────────────────────────────────────
PORT=5000
NODE_ENV=development
```

> ⚠️ **Never commit your `.env` files.** They are excluded via `.gitignore`.

**Tip:** Generate strong secrets with:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

### Running the Server

```bash
# Development mode (with hot reload via nodemon)
npm run dev

# Production mode
npm start
```

The server will start at: `http://localhost:5000`

---

## 🧠 Architecture

```
Request
  │
  ▼
app.js              ← Express app, global middleware (cors, helmet, json)
  │
  ▼
routes/             ← Route definitions, input validation (⏳ coming soon)
  │
  ▼
controllers/        ← HTTP layer: parse req, call service, send res (⏳ coming soon)
  │
  ▼
services/           ← Business logic, data transformation (⏳ coming soon)
  │
  ▼
config/prisma.js    ← Prisma ORM client (singleton)
  │
  ▼
PostgreSQL          ← Database
```

### Key Design Decisions

**Prisma Singleton (`config/prisma.js`)**
Prevents multiple Prisma Client instances during hot reloads in development (a common nodemon issue). The client is cached on the global object in non-production environments.

**Environment Loader (`config/env.js`)**
Centralizes all environment variable access and validates required keys on startup — failing fast if any are missing rather than encountering cryptic errors later.

**Dual JWT Strategy**
- **Access Token** — Short-lived (e.g., 15 min), used for API authentication.
- **Refresh Token** — Long-lived (e.g., 7 days), used to silently issue new access tokens.

---

## 🔌 API Overview

> Routes are currently under development. Below is the planned structure.

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| `POST` | `/api/auth/register` | Register a new user | ⏳ |
| `POST` | `/api/auth/login` | Login & get tokens | ⏳ |
| `POST` | `/api/auth/refresh` | Refresh access token | ⏳ |
| `POST` | `/api/auth/logout` | Invalidate refresh token | ⏳ |
| `GET` | `/api/listings` | Get all listings | ⏳ |
| `POST` | `/api/listings` | Create a listing | ⏳ |
| `GET` | `/api/listings/:id` | Get listing by ID | ⏳ |
| `PUT` | `/api/listings/:id` | Update a listing | ⏳ |
| `DELETE` | `/api/listings/:id` | Delete a listing | ⏳ |
| `GET` | `/api/users/me` | Get current user profile | ⏳ |

---

## 🔐 Security

This project follows security best practices:

- 🔑 **JWT Secrets** are stored in environment variables — never hardcoded
- 🔒 **Passwords** are hashed with `bcrypt` before storage (never stored in plaintext)
- 🌐 **CORS** is configured and should be restricted to known origins in production
- 🛡️ **Helmet.js** sets secure HTTP headers
- 📁 **`.env` files** are excluded from version control via `.gitignore`
- ⚡ **Input validation** will be enforced at the route level (coming soon)

---

## 📌 Project Status

| Feature | Status |
|---|---|
| Express App Setup | ✅ Complete |
| Environment Configuration | ✅ Complete |
| Global Middlewares | ✅ Complete |
| Error Handler | ✅ Complete |
| Prisma Client Configuration | ✅ Complete |
| Database Schema | 🔄 In Progress |
| Authentication Routes | ⏳ Planned |
| User Routes | ⏳ Planned |
| Listing Routes | ⏳ Planned |
| Controllers & Services | ⏳ Planned |
| Input Validation | ⏳ Planned |
| Unit Tests | ⏳ Planned |
| API Documentation (Swagger) | ⏳ Planned |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

```bash
# 1. Fork the repo and create your branch
git checkout -b feature/your-feature-name

# 2. Make your changes and commit
git commit -m "feat: add your feature"

# 3. Push to your fork
git push origin feature/your-feature-name

# 4. Open a Pull Request
```

Please follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ for college communities everywhere

</div>
