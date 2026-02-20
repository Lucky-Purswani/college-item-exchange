# College Exchange Backend – Schema Implementation

This branch includes:

- Prisma schema models
- User lifecycle fields
- Eligibility logic separation
- Enums and relational mappings

---

## 🗄 Database Design Principles

- User lifecycle (ACTIVE, BANNED, UNVERIFIED) separated from eligibility
- Business flags like `isEligible` handled independently
- Relations structured for Listings, Interactions, Messages, Reports
- Designed for scalability and role-based access

---

## 🛠 Next Steps

- Implement route structure
- Add controllers
- Add services layer
- Add transaction logic
- Add authentication middleware

---

## ⚠️ Note

Migration not executed yet.
Schema under review before database migration.
