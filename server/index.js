const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, '../dist')));
app.set('port', 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → ${server.address().port} [http://localhost:${server.address().port}]`);
});
