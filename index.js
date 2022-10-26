const express = require('express');
const app = express();
var cors = require('cors');

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(cors());

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});