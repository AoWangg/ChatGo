import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { description } = req.body;
  const filePath = path.join(process.cwd(), 'backend/src/examples.txt');

  fs.writeFile(filePath, description, function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: '写入文件失败' });
    } else {
      res.status(200).json({ message: '描述已写入文件' });
    }
  });
}