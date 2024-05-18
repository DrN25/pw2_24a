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
}
ahorcado();