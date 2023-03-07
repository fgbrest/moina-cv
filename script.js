// toma el botón y el elemento en el cuerpo
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

// verifica la preferencia del usuario
const prefiereModoOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

// setea el esquema inicial basado en la preferencia del usuario
if (prefiereModoOscuro) {
  body.classList.add('dark-mode');
} else {
  body.classList.remove('dark-mode');
}

// cambia el esquema de colores cuando se cliquea el botón
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

