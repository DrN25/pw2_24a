//Esta funcion elige una de las varias palabras del arreglo al azar
function randomArray(arr) {
	let random = arr[Math.floor(Math.random() * arr.length)];
	return random;
}

function ahorcado() {
	let arr = ['diario','sol','guerra','profesional','ahorcado','martes'];
	let abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let palabra = randomArray(arr);
	let barra = document.getElementById('barra');
	let teclado = document.getElementById('teclado');
	let palabraProgreso = '_'.repeat(palabra.length);
	let errores = 0;
	//Funcion que actualiza la palabra actual segun la palabra seleccionada
	function barraActualizada(letra) {
		let temp = '';
		for(let i = 0; i < palabra.length; i++) {
			if(palabra[i] === letra || palabraProgreso[i] !== '_') {
				temp += palabra[i];
			} else {
				temp += "_";
			}
		}
		palabraProgreso = temp;
		barra.value = palabraProgreso;
	}
	function mostrarImagen(error) {
		let imagen = document.getElementById('imagen');
		imagen.src = 'img/imagen' + error + '.png'; //Se cambiara de imagen en cada error
	}
	//Se generan el abecedario y sus respectivos botones
	for(let i = 0; i < abecedario.length; i++) {
		let letra = abecedario[i];
		let tecla = document.createElement('button');
		tecla.textContent = letra;
		tecla.type = 'button';
		teclado.appendChild(tecla);
		tecla.addEventListener('click', ()=> {
			if(palabra.indexOf(letra) === -1) {
				errores++;
				mostrarImagen(errores);
				if (errores === 7) {
					alert('PERIDISTE! La palabra era: ' + palabra); // Mostrar alerta al alcanzar 7 errores
				}
			}
			barraActualizada(letra);
		});
		if( (i + 1) % 10 === 0) {	//Cada 10 botones se hara salto de linea
			teclado.appendChild(document.createElement('br'));
		}
	}
}
ahorcado()