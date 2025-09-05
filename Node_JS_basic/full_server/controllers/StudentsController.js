import readDatabase from '../utils.js';

function getDBPath() {
  return process.argv[2];
}

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const map = await readDatabase(getDBPath());
      const fields = Object.keys(map).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      const lines = ['This is the list of our students'];
      for (const field of fields) {
        const list = map[field] || [];
        lines.push(`Number of students in ${field.toUpperCase()}: ${list.length}. List: ${list.join(', ')}`);
      }
      res.status(200).send(lines.join('\n'));
    } catch (e) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes((major || '').toUpperCase())) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const map = await readDatabase(getDBPath());
      const list = map[major.toUpperCase()] || [];
      res.status(200).send(`List: ${list.join(', ')}`);
    } catch (e) {
      res.status(500).send('Cannot load the database');
    }
  }
}
module.exports = StudentsController;
