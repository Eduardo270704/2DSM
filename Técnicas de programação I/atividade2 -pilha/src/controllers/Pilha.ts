import { Request, Response } from "express";
import Arquivo from "./Ariquivo";

export default class Pilha {
  public async push(req: Request, res: Response): Promise<void> {
    const {nome} = req.params;
    const nomes = await Arquivo.ler();
    nomes.push(nome);
    await Arquivo.escrever(nomes.join("\r\n"));
    res.send(nomes);
  }

  public async pop(_: Request, res: Response): Promise<void> {
    const nomes = await Arquivo.ler();
    const nome = nomes.pop();
    if (!nome) {
      res.send("Pilha vazia");
      return;
    }
    await Arquivo.escrever(nomes.join("\r\n"));
    res.send(nome);
  }
}
