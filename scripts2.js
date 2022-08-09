const fila2 = document.querySelector('.contenedor-carousel2');
const peliculas2 = document.querySelectorAll('.pelicula2');

const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

// ? ----------------Event Listener para la flecha derecha ----
flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;

	const indicadorActivo2 = document.querySelector('.indicadores2 .activo');
	if (indicadorActivo2.nextSibling) {
		indicadorActivo2.nextSibling.classList.add('activo');
		indicadorActivo2.classList.remove('activo');
	}

});
// ? ----------------Event Listener para la flecha izquierda ----
flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;

	const indicadorActivo2 = document.querySelector('.indicadores2 .activo');
	if (indicadorActivo2.previousSibling) {
		indicadorActivo2.previousSibling.classList.add('activo');
		indicadorActivo2.classList.remove('activo');
	}

});

//? ------ paginacion ----
const numeroPaginas2 = Math.ceil(peliculas2.length / 5);
for(let i = 0; i< numeroPaginas2; i++){
	const indicador2 = document.createElement('button');


	if (i==0) {
		indicador2.classList.add('activo');
	}



	document.querySelector('.indicadores2').appendChild(indicador2);
	indicador2.addEventListener('click', (e)=>{
		fila2.scrollLeft = i * fila2.offsetWidth;


		document.querySelector('.indicadores2 .activo') .classList.remove('activo');
		e.target.classList.add('activo');
	})
}


//? ---Hover ---
peliculas2.forEach((pelicula2) =>{
	pelicula2.addEventListener('mouseenter', (e) =>
	{
		const elemento2 = e.currentTarget;
		setTimeout(() =>{
			peliculas2.forEach(pelicula2=>pelicula2.classList.remove('hover'));
			elemento2.classList.add('hover');
		},300);
	});
});

fila2.addEventListener('mouseleave', () =>{
	peliculas2.forEach(pelicula2=>pelicula2.classList.remove('hover'));
});