const fila1 = document.querySelector('.contenedor-carousel1');
const peliculas1 = document.querySelectorAll('.pelicula1');

const flechaIzquierda1 = document.getElementById('flecha-izquierda1');
const flechaDerecha1 = document.getElementById('flecha-derecha1');

// ? ----------------Event Listener para la flecha derecha ----
flechaDerecha1.addEventListener('click', () => {
	fila1.scrollLeft += fila1.offsetWidth;

	const indicadorActivo1 = document.querySelector('.indicadores1 .activo');
	if (indicadorActivo1.nextSibling) {
		indicadorActivo1.nextSibling.classList.add('activo');
		indicadorActivo1.classList.remove('activo');
	}

});
// ? ----------------Event Listener para la flecha izquierda ----
flechaIzquierda1.addEventListener('click', () => {
	fila1.scrollLeft -= fila1.offsetWidth;

	const indicadorActivo1 = document.querySelector('.indicadores1 .activo');
	if (indicadorActivo1.previousSibling) {
		indicadorActivo1.previousSibling.classList.add('activo');
		indicadorActivo1.classList.remove('activo');
	}

});

//? ------ paginacion ----
const numeroPaginas1 = Math.ceil(peliculas1.length / 5);
for(let i = 0; i< numeroPaginas1; i++){
	const indicador1 = document.createElement('button');


	if (i==0) {
		indicador1.classList.add('activo');
	}



	document.querySelector('.indicadores1').appendChild(indicador1);
	indicador1.addEventListener('click', (e)=>{
		fila1.scrollLeft = i * fila1.offsetWidth;


		document.querySelector('.indicadores1 .activo') .classList.remove('activo');
		e.target.classList.add('activo');
	})
}


//? ---Hover ---
peliculas1.forEach((pelicula1) =>{
	pelicula1.addEventListener('mouseenter', (e) =>
	{
		const elemento1 = e.currentTarget;
		setTimeout(() =>{
			peliculas1.forEach(pelicula1=>pelicula1.classList.remove('hover'));
			elemento1.classList.add('hover');
		},300);
	});
});

fila1.addEventListener('mouseleave', () =>{
	peliculas1.forEach(pelicula1=>pelicula1.classList.remove('hover'));
});