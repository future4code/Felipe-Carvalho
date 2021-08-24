import { Request, Response } from 'express';

export default async function createUser(
  req: Request,
  res: Response
) {
  try {
    if (
      req.body.name === '' ||
      req.body.nickname === '' ||
      req.body.email === ''
    ) {
      res.status(400).send({
        message: "Nenhum dos campos pode estar em branco"
      })
    }

    // consultar banco de dados

    // validar saídas do banco

    //  responder a requisição

  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}