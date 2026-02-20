import dotenv from "dotenv";

// Determine environment
const NODE_ENV = process.env.NODE_ENV || "development";

// Load corresponding env file
dotenv.config({
  path: `.env.${NODE_ENV}.local`,
});

// Optional: Basic validation (recommended)
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

if (!process.env.JWT_ACCESS_SECRET) {
  throw new Error("JWT_ACCESS_SECRET is not defined in environment variables");
}

// Export structured config
export const config = {
  env: NODE_ENV,
  port: process.env.PORT || 5000,
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
  },
};
