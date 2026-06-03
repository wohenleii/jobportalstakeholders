require('dotenv').config({ path: require('path').join(__dirname, '../../backend/.env') });
const mysql = require('mysql2/promise');

async function run() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false },
  });

  // password hash for "password"
  const hash = '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';

  await conn.query(
    "INSERT IGNORE INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    ['Sarah Tan', 'student@rp.edu.sg', hash, 'student']
  );

  console.log('✅ Student user added: student@rp.edu.sg / password');
  await conn.end();
}

run().catch(err => console.error('❌ Error:', err.message));
