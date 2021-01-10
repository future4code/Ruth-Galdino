import express, { Express, Request, Response } from "express"
import cors from "cors"
import { accounts } from "./accounts"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("./users/create", (req:Request, res:Response) =>{
    try{

        const  { name, CPF, dateofbirth}= req.body

        const [ day, month, year] = dateofbirth.split("./")
    
        const dateofbirthday: Date = new Date(`${year}-${month}-${day}`)

        const milisegundosAge: number = Date.now() - dateofbirthday.getTime()
        const yearsAge:number = milisegundosAge / 1000 / 60/ 60 / 24/ 365

        if(yearsAge < 18){
            res.statusCode = 400
            throw new Error ("Não é possível criar uma conta com idade menor que 18 anos.")
        }

        accounts.push({
            name: name,
            CPF,
            dateofbirth,
            balance: 0,
            statement: []
        })
        res.status(201).send("Sua conta foi criada com sucesso!")
    }catch (error) {
        console.log(error)
        res.send("error.message")

    }
})

app.get("users/all", (req:Request, res: Response) => {
    try {
        if(!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
        res.status(200).send(accounts)
    }catch (error){
        res.send(error.message)
    }
})

app.listen(3003, () =>  {
    console.log("servidor rodandona porta 3003")
})