import { Router, Request, Response } from "express";
import controller from "../controllers/UfController";

const routes = Router();

routes.get("/sigla/:sigla", controller.listBySigla);
routes.get("/ibge/:ibge", controller.listByIbge);

routes.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default routes;
