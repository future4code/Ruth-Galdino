import { Request, Response } from "express"


export const signup = async signup(req: Request, res: Response) {

    const userBusiness = userBusiness();
    
    try {
        const input = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
                            role: req.body.role
        }

        const token = await userBusiness.createUser(input);

        res.status(200).send({ token });

    } catch (error) {
        res.status(400).send({ error: error.message });
    }

    await destroyConnection();
}