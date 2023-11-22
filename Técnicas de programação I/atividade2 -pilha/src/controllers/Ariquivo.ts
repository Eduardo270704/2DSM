import fs from 'fs-extra'

export default class Arquivo {
  private static filename: string = "./src/controllers/dados.txt";

  public static async ler(): Promise<string[]> | never {
    const conteudo = await fs.readFile(Arquivo.filename, "utf-8");
    return conteudo ?  conteudo.split("\r\n") : [];
  }

  public static async escrever(nome: string): Promise<void> | never {
    fs.writeFile(Arquivo.filename, nome, "utf-8");
  }
}