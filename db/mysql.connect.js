import mysql from 'mysql2/promise';

export default async (callback) => {
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'procmaster',
  });
  callback(conn);
};
