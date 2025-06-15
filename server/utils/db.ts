import mysql from 'mysql2/promise'
const {dbName, dbHost, dbUser, dbPassword} = useRuntimeConfig()


const pool = mysql.createPool({
  host: dbHost,
  user: dbUser,
  database: dbName,
  password: dbPassword,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export default pool