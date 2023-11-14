import AppDataSource from "./dados";
import { Request, Response } from "express";

class UfController {
  public async list(_: Request, res: Response): Promise<Response> {
    const ufs = AppDataSource;
    return res.json(ufs);
  }

  public async listByUf(req: Request, res: Response): Promise<Response> {
    const sigla = req.params.uf;
    const uf = AppDataSource.getBySigla(Ufs, {
        where: { uf: sigla }
    });
    return res.json(uf);
  }
}
/*

  public async listById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const uf = await AppDataSource.manager.findOne(Uf, {
      where: { id: parseInt(id) },
      relations: {
        user: true,
        brand: true,
        category: true,
        photos: true,
      },
    });
    return res.json(uf);
  }
}

export default new UfController();
*/
