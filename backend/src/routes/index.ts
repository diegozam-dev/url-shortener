import { Request, Response, Router } from 'express';
import shortUrlRouter from './shortUrl.routes';
import { BASE_URL } from '../config';

const apiRouter = Router();
const router = Router();

apiRouter.use('/v1/api/url', shortUrlRouter);

router.use('/', apiRouter);
// Redirecciona a la api
router.get('/:shortCode', (req: Request, res: Response) => {
  const { shortCode } = req.params;
  res.redirect(301, `${BASE_URL}/v1/api/url/redirect/${shortCode}`);
});

export default router;
