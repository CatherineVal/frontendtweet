const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), console.log('Server on port 4000'));




