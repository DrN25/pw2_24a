function desordenarArray(arr) {
	for(let i = 0; i < arr.length; i++) {
		let random = Math.floor(Math.random() * arr.length);
		let temp = arr[random];
		arr[random] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

function teclado() {
	let arr = [1,2,3,4,5,6,7,8,9,0];
	arr = desordenarArray(arr);
	let teclado = document.getElementById('teclado');
	for(let i = 0; i < arr.length; i++) {
		let tecla = document.createElement('button');
		tecla.textContent = arr[i];
		teclado.appendChild(tecla);
	}
}
teclado();