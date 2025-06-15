import pool from './db'
import { ResultSetHeader, RowDataPacket } from 'mysql2'

export async function query<T = any>(sql: string, values: any[] = []) {
  const [rows] = await pool.execute<T & RowDataPacket[]>(sql, values)
  return rows
}

export async function insert(sql: string, values: any[] = []) {
  const [result] = await pool.execute(sql, values) as [ResultSetHeader, unknown]
  return result.insertId
}

export async function get<T = any>(sql: string, values: any[] = []) {
  const [rows] = await pool.execute<T[] & RowDataPacket[]>(sql, values)
  return rows.length ? rows[0] : null
}