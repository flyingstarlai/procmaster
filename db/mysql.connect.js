import mysql from 'mysql2/promise';

export default config => async (callback) => {
  const conn = await mysql.createConnection(config);
  callback(conn);
};

