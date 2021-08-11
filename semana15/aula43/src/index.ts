import express, { Express, Response, Request } from 'express'
import cors from 'cors'
import { countries } from './data';
import { country, CONTINENTS } from "./types";



const app: Express = express();

app.use(express.json());
app.use(cors());



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})
// endpoint 1 dando todos os paises
app.get("/countries", (req: Request, res: Response) => {
    res.send(countries)
})

// endpoint 3 de pesquisar por query
app.get("/countries/search", (req: Request, res: Response) => {
    let result: country[] = countries;
    try {
        if (!req.query.name && !req.query.capital && !req.query.continent) {
            throw new Error("Invalid Parameters");
        }
        if (req.query.name) {
            result = result.filter((country) =>
                country.name.includes(req.query.name as string)
            );
        }

        if (req.query.capital) {
            result = result.filter((country) =>
                country.capital.includes(req.query.capital as string)
            );
        }

        if (req.query.continent) {
            result = result.filter((country) =>
                country.continent.includes(req.query.continent as string)
            );
        }
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// endpoint 2 de pesquisar por id

app.get("/countries/:id", (req: Request, res: Response) => {
    const result = countries.find(
        (country) => { return country.id === Number(req.params.id) }
    )
    if (result === undefined) {
        res.status(404).send("País não encontrado")
    } else {
        res.send(result)
    }
})

// endpoint 4 editar pais
app.post("/countries/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        );

        if (countryIndex === -1) {
            errorCode = 404;
            throw new Error();
        }

        if (!req.body.name && !req.body.capital) {
            throw new Error("Invalid Parameters");
        }

        if (req.body.name) {
            countries[countryIndex].name = req.body.name;
        }
        if (req.query.capital) {
            countries[countryIndex].capital = req.body.capital;
        }

        res.status(200).send("Country successfully updated");
    } catch (error) {
        console.log(error);
        res.status(errorCode).send(error.message);
    }
});


