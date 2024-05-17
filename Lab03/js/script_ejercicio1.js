//Esta funcion desordena el arreglo de numeros para que esten randomizados
function desordenarArray(arr) {
	for(let i = 0; i < arr.length; i++) {
		let random = Math.floor(Math.random() * arr.length);
		let temp = arr[random];
		arr[random] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
//Esta funcion muestra el valor que se haya enviado en una ventana de alerta
function alerta() {
	let url = new URLSearchParams(window.location.search);
	let contenido = url.get('barra');
	if(contenido) {		//Si no se envio nada, no se mostrara la alerta
		alert(`Enviado: ${contenido}`);
	}
}

function teclado() {
	let arr = [1,2,3,4,5,6,7,8,9,0];
	arr = desordenarArray(arr);
	let teclado = document.getElementById('teclado');
	let barra = document.getElementById('barra');	//Aqui se guardaran los datos ingresados
	//Creando las teclas numericas y asignandoles un valor al ser presionadas
	for(let i = 0; i < arr.length; i++) {
		let tecla = document.createElement('button');
		tecla.textContent = arr[i];
		tecla.type = 'button';
		teclado.appendChild(tecla);
		tecla.addEventListener('click', ()=> {
			barra.value += arr[i];
		});
		if( (i + 1) % 3 === 0) {	//Cada 3 botones se hara salto de linea
			teclado.appendChild(document.createElement('br'));
		}
	}
	//Creando el boton limpiar despues de las teclas numericas
	let limpiar = document.createElement('button');
	limpiar.textContent = "Reset";
	limpiar.type = 'button';
	limpiar.addEventListener('click', ()=> {
		barra.value = '';
	});
	teclado.appendChild(limpiar);
	teclado.appendChild(document.createElement('br'));	
}
teclado();
alerta();