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

const crearArbol = (dirActual, espacio = '') => {
	const atr = fs.statSync(dirActual);
	if(atr.isDirectory()) {
		let resultado = '';
		const carpetas = fs.readdirSync(dirActual)
			.filter(carpeta => carpeta != 'node_modules' && fs.statSync(path.join(dirActual, carpeta)).isDirectory());
		for(const carpeta of carpetas) {
			const rutaCarpeta = path.join(dirActual, carpeta);
			resultado += `${espacio}${path.basename(rutaCarpeta)}\n`;
			const archivos = fs.readdirSync(rutaCarpeta);
			for(const archivo of archivos) {
				resultado += `${espacio} ${archivo}\n`;
			}
		}
		return resultado;
	} else {
		return `${espacio}${path.basename(dirActual)}\n`;
	}
};

app.get('/arbol', (req, res) => {
	const arbol = crearArbol(path.join(__dirname, 'agenda'));
	res.send(`<pre>${arbol.replace(/\n/g, '<br>')}</pre>`);
});

app.listen(3000, () => {
	console.log("Escuchando en: http://localhost:3000")
});