const fila3 = document.querySelector('.contenedor-carousel3');
const peliculas3 = document.querySelectorAll('.pelicula3');

const flechaIzquierda3 = document.getElementById('flecha-izquierda3');
const flechaDerecha3 = document.getElementById('flecha-derecha3');

// ? ----------------Event Listener para la flecha derecha ----
flechaDerecha3.addEventListener('click', () => {
	fila3.scrollLeft += fila3.offsetWidth;

	const indicadorActivo3 = document.querySelector('.indicadores3 .activo');
	if (indicadorActivo3.nextSibling) {
		indicadorActivo3.nextSibling.classList.add('activo');
		indicadorActivo3.classList.remove('activo');
	}

});
// ? ----------------Event Listener para la flecha izquierda ----
flechaIzquierda3.addEventListener('click', () => {
	fila3.scrollLeft -= fila3.offsetWidth;

	const indicadorActivo3 = document.querySelector('.indicadores3 .activo');
	if (indicadorActivo3.previousSibling) {
		indicadorActivo3.previousSibling.classList.add('activo');
		indicadorActivo3.classList.remove('activo');
	}

});

//? ------ paginacion ----
const numeroPaginas3 = Math.ceil(peliculas3.length / 5);
for(let i = 0; i< numeroPaginas3; i++){
	const indicador3 = document.createElement('button');


	if (i==0) {
		indicador3.classList.add('activo');
	}



	document.querySelector('.indicadores3').appendChild(indicador3);
	indicador3.addEventListener('click', (e)=>{
		fila3.scrollLeft = i * fila3.offsetWidth;


		document.querySelector('.indicadores3 .activo') .classList.remove('activo');
		e.target.classList.add('activo');
	})
}


//? ---Hover ---
peliculas3.forEach((pelicula3) =>{
	pelicula3.addEventListener('mouseenter', (e) =>
	{
		const elemento3 = e.currentTarget;
		setTimeout(() =>{
			peliculas3.forEach(pelicula3=>pelicula3.classList.remove('hover'));
			elemento3.classList.add('hover');
		},300);
	});
});

fila3.addEventListener('mouseleave', () =>{
	peliculas3.forEach(pelicula3=>pelicula3.classList.remove('hover'));
});