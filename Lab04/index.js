const express = require('express');
const bp = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(bp.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', (req, res) => {
	const {fecha, hora, contenido} = req.body;
	const folderPath = path.join(__dirname, fecha);
	const filePath = path.join(folderPath, `${hora}.txt`);
	if(!fs.existsSync(folderPath)) {
		fs.mkdirSync(folderPath);
	}
	fs.writeFileSync(filePath, contenido);
	res.send('Archivo guardado correctamente.');
});

app.listen(3000, () => {
	console.log("Escuchando en: http://localhost:3000")
});