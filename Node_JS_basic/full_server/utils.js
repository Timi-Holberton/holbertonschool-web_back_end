import { promises as fs } from 'fs';

async function readDatabase(filePath) {
  if (!filePath) throw new Error('Cannot load the database');
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    if (lines.length < 2) return {};
    const out = {};
    for (const line of lines.slice(1)) {
      if (!line.trim()) continue;
      const parts = line.split(',');
      const firstname = parts[0];
      const field = parts[3];
      if (!out[field]) out[field] = [];
      out[field].push(firstname);
    }
    return out;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = readDatabase;
