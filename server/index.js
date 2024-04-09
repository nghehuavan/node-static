const path = require('path');
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  fs.readFile(req.file.path, (err, data) => {
    if (err) throw err;
    const base64Image = Buffer.from(data).toString('base64');

    let json = {
      id: '155baaa9-7646-4012-8031-3a53a40434e3',
      name: 'test.jpg',
      time: 1666686753,
      items: [
        {
          amount: 120,
          quantity: 10,
        },
        {
          amount: 100,
          quantity: 2,
        },
      ],
      loss: 2,
      total: 1400,
      image: base64Image,
      csv: 'MSwxNTViYWFhOS03NjQ2LTQwMTItODAzMS0zYTUzYTQwNDM0ZTMsMSwy',
    };

    res.json(json);
  });
});

app.use(express.static(path.join(__dirname, '../static')));
app.set('port', 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → ${server.address().port} [http://localhost:${server.address().port}]`);
});
