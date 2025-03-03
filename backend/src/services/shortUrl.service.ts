import ShortUrlModel from '../models/shortUrl.model';
import { BASE_URL } from '../config';
import CustomError from '../errors/customError.error';
import {
  encodedIdWithCheckSum,
  decodeIdWithCheckSum,
  isValidCheckSum
} from '../utils/index';
import ErrorCode from '../errors/errorCodes';

class ShortUrlService {
  private shortUrlModel: ShortUrlModel;

  constructor() {
    this.shortUrlModel = new ShortUrlModel();
  }

  public createShortUrl = async (url: string) => {
    // Añade una nueva url a la bd
    const result = await this.shortUrlModel.create(url);

    if (result.lastInsertRowid) {
      // Genera la url corta
      const id = Number(result.lastInsertRowid);
      const shortUrl = this.getShortUrl(id);

      // Actualiza el registro agregando la url acortada
      await this.shortUrlModel.updateShortUrl(id, shortUrl);
      const { rows } = await this.shortUrlModel.getById(id);

      return rows[0];
    }

    // Si no se ha insertado ningún registro devuelve le ya existente
    return result.rows[0];
  };

  public getOriginalUrl = async (checkSumId: string) => {
    // Valida el checkSum
    if (!isValidCheckSum(checkSumId))
      throw new CustomError(ErrorCode.InvalidUrl, 'The url is invalid.');

    const id = decodeIdWithCheckSum(checkSumId);

    const { rows } = await this.shortUrlModel.getById(id);

    // Si no hay registros la url no existe
    if (rows.length <= 0)
      throw new CustomError(ErrorCode.UrlNotExists, 'The url does not exist.');

    return rows[0].original_url;
  };

  private getShortUrl(id: number) {
    const checkSumId = encodedIdWithCheckSum(id);

    return `${BASE_URL}/${checkSumId}`;
  }
}

export default ShortUrlService;
