// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dirTree from 'directory-tree';

export default function handler(req, res) {
  res.status(200).json({
    filename: __filename,
    dirname: __dirname,
    cwd: process.cwd(),
    files: dirTree(process.cwd()),
    rootFiles: dirTree('/'),
  });
}
