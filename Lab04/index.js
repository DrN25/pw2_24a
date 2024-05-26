const express = require('express');
const bp = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.static(__dirname));

app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', (req, res) => {
	const {fecha, hora, contenido} = req.body;
	const folderPath = path.join(__dirname, 'agenda' , fecha);
	const filePath = path.join(folderPath, `${hora}.txt`);
	if(!fs.existsSync(folderPath)) {
		fs.mkdirSync(folderPath, { recursive: true });
	}
	fs.writeFileSync(filePath, contenido);
	res.send('Archivo guardado correctamente.');
});

app.get('/buscar', (req, res) => {
	const {fecha, hora} = req.query;
	const filePath = path.join(__dirname, 'agenda', fecha, `${hora}.txt`);
	if(fs.existsSync(filePath)) {
		const contenido = fs.readFileSync(filePath, 'utf-8');
		res.json({contenido});
	} else {
		res.status(404).send('Archivo no encontrado');
	}
});

app.post('/editar', (req, res) => {
	const {fecha, hora, contenido} = req.body;
	const folderPath = path.join(__dirname, 'agenda', fecha);
	const filePath = path.join(folderPath, `${hora}.txt`);
	if(fs.existsSync(filePath)) {
		fs.writeFileSync(filePath, contenido);
	res.send('Archivo editado exitosamente');
	} else {
		res.status(404).send('Archivo no encontrado');
	}
});

app.post('/eliminar', (req, res) => {
	const { fecha, hora } = req.body;
	const folderPath = path.join(__dirname, 'agenda', fecha);
	const filePath = path.join(folderPath, `${hora}.txt`);
	if (fs.existsSync(filePath)) {
		fs.unlinkSync(filePath);
	res.send('Archivo eliminado exitosamente');
	} else {
		res.status(404).send('Archivo no encontrado');
	}
});

const crearArbol = (dirActual) => {
	let resultado = `${path.basename(dirActual)} [DIR]\n`;
	const items = fs.readdirSync(dirActual);
	items.forEach((item) => {
		const rutaItem = path.join(dirActual, item);
		const esDirectorio = fs.statSync(rutaItem).isDirectory();
		const prefijo = esDirectorio ? '[DIR]' : '[FILE]';
		const guion = esDirectorio ? '---' : '--';
		resultado += `|${guion} ${item} ${prefijo}\n`;
		if (esDirectorio) {
            const subItems = fs.readdirSync(rutaItem);
				subItems.forEach((subItem) => {
				resultado += `|    |-- ${subItem} [FILE]\n`;
			});
		}
	});
	return resultado;
};

app.get('/arbol', (req, res) => {
	const arbol = crearArbol(path.join(__dirname, 'agenda'));
	res.send(`${arbol.replace(/\n/g, '<br>')}`);
});

app.listen(3000, () => {
	console.log("Escuchando en: http://localhost:3000")
});