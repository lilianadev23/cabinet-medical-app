const express = require('express');
const app = express();

app.get('/api/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
