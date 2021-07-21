import path from 'path';
import dirTree from 'directory-tree';
import { ok } from 'lib/response';

export default async (req, res) => {
  return ok(res, {
    dir: __dirname,
    file: __filename,
    cwd: process.cwd(),
    path: path.resolve('.'),
    files: dirTree(process.cwd()),
  });
};
