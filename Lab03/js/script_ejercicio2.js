function calculadora() {
	let arr = [7,8,9,'/','E',4,5,6,'*','C',1,2,3,'-','.',0,'(',')','+','='];
	let calculadora = document.getElementById('calculadora');
	let barra = document.getElementById('barra');	//Aqui se mostraran los datos y el resultado
	let resultados = document.getElementById('resultados');	//Operaciones realizadas
	let tablaResultados = document.createElement('table');
    resultados.appendChild(tablaResultados);
	//Creando las teclas numericas y asignandoles un valor al ser presionadas
	for(let i = 0; i < arr.length; i++) {
		let tecla = document.createElement('button');
		tecla.textContent = arr[i];
		tecla.type = 'button';
		tecla.classList.add('tecla');
		calculadora.appendChild(tecla);
		tecla.addEventListener('click', ()=> {
			//Se toman condiciones acerca de que hacer con cada boton			
			if(arr[i] == 'E') {
				barra.value = barra.value.slice(0,-1);	//Elimina el ultimo valor
			} else if (arr[i] == 'C') {
				barra.value = '';	//Elimina todo
			} else if (arr[i] == '=') {
				try {
					let fila = tablaResultados.insertRow();
                    fila.textContent = barra.value;
					barra.value = eval(barra.value);
				} catch(error) {
					barra.value = 'ERROR';
				}
			} else {
				barra.value += arr[i];
			}
		});		
		if( (i + 1) % 5 === 0) {	//Cada 5 botones se hara salto de linea
			calculadora.appendChild(document.createElement('br'));
		}
	}
}
calculadora();