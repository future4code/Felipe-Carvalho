import { Request, Response } from 'express';
import moment from 'moment'

export default async function createTask(
  req: Request,
  res: Response
) {
  try {
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.deadline ||
      !req.body.authorId
    ) {
      res.status(400).send({
        message: '"title", "description", "deadline" e "authorId" são obrigatorios"'
      })

      return
    }

    const dateDiff: number = moment(req.body.deadline, "DD/MM/AAAA").unix() - moment().unix()

    if (dateDiff <= 0) {
      res.status(400).send({
        message: '"deadline" deve ser uma data futura'
      })

      return
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