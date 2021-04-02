const express = require("express");
const router = express.Router();
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '../../public')));

router.get('/stuff', (req, res) => {
  res.status(200).send({ response: 'I am alive'});
});



module.exports = router;