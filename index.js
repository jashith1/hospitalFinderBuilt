const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile('/home/bloppai/programming/test/index.html');
});

app.listen(3000, () => console.log('BANZAI'));
