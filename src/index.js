import express from "express";
import { randomUUID } from "crypto";
import { usuarios } from "./dados";

const app = express();
app.use(express.json());

// Definir as rotas
app.get("/", (req, res) => {
    res.status(200).send({
        ok: true,
        data: usuarios,
    });
});

app.listen(3333, () => {
    console.log("Server is running...");
});
