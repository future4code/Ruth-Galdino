import { Request, Response } from 'express'
import { connection } from '..'
import enpoints from './enpoints'

export default async function selectAllUsers(req: Request, res: Response):Promise<any> {

    const { name } = req.query as enpoints

    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48-template;
       WHERE name
       LIKE "%${name}";
    `)
 
    return result[0]
 }
    
 