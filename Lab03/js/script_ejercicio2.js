function calculadora() {
	let arr = [7,8,9,'÷','E',4,5,6,'x','C',1,2,3,'-','.',0,'(',')','+','='];
	let calculadora = document.getElementById('calculadora');
	let barra = document.getElementById('barra');	//Aqui se mostraran los datos y el resultado
	//Creando las teclas numericas y asignandoles un valor al ser presionadas
	for(let i = 0; i < arr.length; i++) {
		let tecla = document.createElement('button');
		tecla.textContent = arr[i];
		tecla.type = 'button';
		calculadora.appendChild(tecla);
		if(i !== 4 || i !== 9 || i !== 19) {
			tecla.addEventListener('click', ()=> {
				barra.value += arr[i];
			});
		}
		
		if( (i + 1) % 5 === 0) {	//Cada 5 botones se hara salto de linea
			calculadora.appendChild(document.createElement('br'));
		}
	}
}
calculadora();
alerta();