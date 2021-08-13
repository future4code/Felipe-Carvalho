import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  name: string,
  cpf: string,
  birthDate: string,
  balance: number,
  age: number,
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    name: "Alice",
    cpf: "000.000.000.01",
    birthDate: "ADMIN",
    balance: 1000.00,
    age: 19
  },
  {
    name: "Bob",
    cpf: "000.000.000.02",
    birthDate: "NORMAL",
    balance: 1000.00,
    age: 36
  },
  {
    name: "Coragem",
    cpf: "000.000.000.03",
    birthDate: "NORMAL",
    balance: 1000.00,
    age: 21
  },
  {
    name: "Dory",
    cpf: "000.000.000.04",
    birthDate: "NORMAL",
    balance: 1000.00,
    age: 20
  },
  {
    name: "Elsa",
    cpf: "000.000.000.05",
    birthDate: "ADMIN",
    balance: 1000.00,
    age: 25
  },
  {
    name: "Fred",
    cpf: "000.000.000.06",
    birthDate: "ADMIN",
    balance: 1000.00,
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users)
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
