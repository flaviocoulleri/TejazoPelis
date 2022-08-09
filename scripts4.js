const fila4 = document.querySelector('.contenedor-carousel4');
const peliculas4 = document.querySelectorAll('.pelicula4');

const flechaIzquierda4 = document.getElementById('flecha-izquierda4');
const flechaDerecha4 = document.getElementById('flecha-derecha4');

// ? ----------------Event Listener para la flecha derecha ----
flechaDerecha4.addEventListener('click', () => {
	fila4.scrollLeft += fila4.offsetWidth;

	const indicadorActivo4 = document.querySelector('.indicadores4 .activo');
	if (indicadorActivo4.nextSibling) {
		indicadorActivo4.nextSibling.classList.add('activo');
		indicadorActivo4.classList.remove('activo');
	}

});
// ? ----------------Event Listener para la flecha izquierda ----
flechaIzquierda4.addEventListener('click', () => {
	fila4.scrollLeft -= fila4.offsetWidth;

	const indicadorActivo4 = document.querySelector('.indicadores4 .activo');
	if (indicadorActivo4.previousSibling) {
		indicadorActivo4.previousSibling.classList.add('activo');
		indicadorActivo4.classList.remove('activo');
	}

});

//? ------ paginacion ----
const numeroPaginas4 = Math.ceil(peliculas4.length / 5);
for(let i = 0; i< numeroPaginas4; i++){
	const indicador4 = document.createElement('button');


	if (i==0) {
		indicador4.classList.add('activo');
	}



	document.querySelector('.indicadores4').appendChild(indicador4);
	indicador4.addEventListener('click', (e)=>{
		fila4.scrollLeft = i * fila4.offsetWidth;


		document.querySelector('.indicadores4 .activo') .classList.remove('activo');
		e.target.classList.add('activo');
	})
}


//? ---Hover ---
peliculas4.forEach((pelicula4) =>{
	pelicula4.addEventListener('mouseenter', (e) =>
	{
		const elemento4 = e.currentTarget;
		setTimeout(() =>{
			peliculas4.forEach(pelicula4=>pelicula4.classList.remove('hover'));
			elemento4.classList.add('hover');
		},400);
	});
});

fila4.addEventListener('mouseleave', () =>{
	peliculas4.forEach(pelicula4=>pelicula4.classList.remove('hover'));
});