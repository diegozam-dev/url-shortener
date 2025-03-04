import { db } from '../db/connection';

class ShortUrlModel {
  public getById = async (id: number) => {
    return await db.execute({
      sql: 'SELECT * FROM short_urls WHERE id = ?',
      args: [id]
    });
  };

  private getByOriginalUrl = async (url: string) => {
    return await db.execute({
      sql: 'SELECT * FROM short_urls WHERE original_url = ?',
      args: [url]
    });
  };

  public create = async (url: string) => {
    const result = await this.getByOriginalUrl(url);

    // Validamos que no exista una url igual a la que recibimos como parámetro
    if (result.rows.length <= 0) {
      return await db.execute({
        sql: 'INSERT INTO short_urls (original_url) VALUES (?)',
        args: [url]
      });
    }

    // Si existe devolvemos el registro ya existente
    return result;
  };

  public updateShortUrl = async (id: number, shortCode: string) => {
    const result = await db.execute({
      sql: 'UPDATE short_urls SET short_code = ? WHERE id = ?',
      args: [shortCode, id]
    });

    return result;
  };
}

export default ShortUrlModel;
