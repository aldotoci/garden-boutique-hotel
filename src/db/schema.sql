-- Run once in Vercel Postgres / Neon SQL editor (or psql) after creating the database.

CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(100) NOT NULL DEFAULT '',
  room VARCHAR(255) NOT NULL,
  check_in VARCHAR(32) NOT NULL,
  check_out VARCHAR(32) NOT NULL,
  adults INTEGER NOT NULL DEFAULT 1 CHECK (adults >= 1),
  children INTEGER NOT NULL DEFAULT 0 CHECK (children >= 0),
  source VARCHAR(50) NOT NULL DEFAULT 'Website',
  status VARCHAR(32) NOT NULL DEFAULT 'Pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_check_in ON bookings (check_in);

CREATE TABLE IF NOT EXISTS room_nightly_prices (
  room_slug VARCHAR(64) PRIMARY KEY,
  nightly_price NUMERIC(12, 2) NOT NULL CHECK (nightly_price > 0 AND nightly_price <= 999999),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
