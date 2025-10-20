const path = require('path');
const fs = require('fs');

exports.uploadMedia = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    res.status(201).json({ message: 'File uploaded successfully', filename: req.file.filename });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error uploading file', error });
  }
};

exports.getMedia = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../public/uploads', filename);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(404).json({ message: 'File not found' });
    }

    res.setHeader('Content-Type', 'image/jpeg'); 
    res.send(data);
  });
};