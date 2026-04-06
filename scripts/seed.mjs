import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Pool } from "@neondatabase/serverless";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const url = process.env.POSTGRES_URL;
if (!url) {
  console.error(
    "POSTGRES_URL is missing. Run: npm run db:seed (loads .env.local via Node --env-file)",
  );
  process.exit(1);
}

const pool = new Pool({ connectionString: url });
try {
  const schema = readFileSync(join(root, "src/db/schema.sql"), "utf8");
  await pool.query(schema);
  console.log("Schema ensured: src/db/schema.sql");

  const seed = readFileSync(join(root, "src/db/seed.sql"), "utf8");
  await pool.query(seed);
  console.log("Seed applied: src/db/seed.sql");
} catch (err) {
  console.error(err);
  process.exitCode = 1;
} finally {
  await pool.end();
}
