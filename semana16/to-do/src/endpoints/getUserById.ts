import { Request, Response } from 'express';
import selectUserById from '../data/selectUserById';

export default async function getUserById(
  req: Request,
  res: Response
) {
  try {
    const user = await selectUserById(req.params.id)

    if (!user) {
      res.status(400).send({
        message: "Usuário não encontrado"
      })

      return
    }

    res.status(200).send({
      message: "Sucesso!",
      id: user.id,
      name: user.name,
      nickname: user.nickname
    })

  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}