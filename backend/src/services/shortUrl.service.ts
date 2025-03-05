import ShortUrlModel from '../models/shortUrl.model';
import CustomError from '../errors/customError.error';
import {
  encodedIdWithCheckSum,
  decodeIdWithCheckSum,
  isValidCheckSum
} from '../utils/index';
import { ErrorCode } from '../types/error';

class ShortUrlService {
  private shortUrlModel: ShortUrlModel;

  constructor() {
    this.shortUrlModel = new ShortUrlModel();
  }

  public createShortUrl = async (url: string) => {
    // Añade una nueva url a la bd
    const createResult = await this.shortUrlModel.create(url);

    if (createResult.lastInsertRowid) {
      // Si se creó un nuevo registro entonces genera la url corta
      const id = Number(createResult.lastInsertRowid);
      const shortCode = encodedIdWithCheckSum(id);

      // Actualiza el registro agregando la url acortada
      await this.shortUrlModel.updateShortUrl(id, shortCode);
      const { rows } = await this.shortUrlModel.getById(id);

      return rows[0];
    }

    // Si no se ha insertado ningún registro devuelve la ya existente
    return createResult.rows[0];
  };

  public getOriginalUrl = async (shortCode: string) => {
    // Valida el checkSum
    if (!isValidCheckSum(shortCode))
      throw new CustomError(ErrorCode.UrlNotExists, 'The url does not exist.');

    const id = decodeIdWithCheckSum(shortCode);

    const { rows } = await this.shortUrlModel.getById(id);

    // Si no hay registros la url no existe
    if (rows.length <= 0)
      throw new CustomError(ErrorCode.UrlNotExists, 'The url does not exist.');

    return rows[0].original_url;
  };
}

export default ShortUrlService;
