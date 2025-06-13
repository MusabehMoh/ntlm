const express = require('express');
const ntlm = require('express-ntlm');

const app = express();

app.use(ntlm());

app.get('/', (req, res) => {
  const user = req.ntlm ? req.ntlm.UserName : 'Anonymous';
  res.send(`Hello ${user}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
