import { createClient } from '@libsql/client';
import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from '../config';

export const db = createClient({
  url: TURSO_DATABASE_URL as string,
  authToken: TURSO_AUTH_TOKEN
});
