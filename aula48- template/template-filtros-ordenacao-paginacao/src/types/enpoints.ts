import { Express, Request, Response } from 'express'
import { connection } from '..'
import selectAllUsers from './queryEndpoint'
import queryEndpoint from './queryEndpoint'

export const getAllUsers = async( req: Request, res: Response) : Promise<void> =>{
    try {
        const userName = req.query.name as string
        const users = await selectAllUsers

        if(!userName.length){
            res.statusCode = 404
            throw new Error ("No recipes found")
        }
        res.status(200).send(users)

    }catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }

}

