import { join } from 'path';
import { createReadStream } from 'fs';
import { send } from 'send';

export default function handler(req, res) {
  const { filename } = req.query;
  const filePath = join(process.cwd(), 'public', filename);
  const stream = createReadStream(filePath);
  send(req, filePath, { root: '/public/docs' }).pipe(res);
}