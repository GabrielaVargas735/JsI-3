//
// Lista de tareas
//
const formulario = document.getElementById('new-task-form');
const data = [formulario];

formulario.addEventListener('submit', (event) => {
  // Se cancela el comportamiento default del formulario.
  event.preventDefault();
  // Texto introducido por el usuario.
  console.log(formulario.elements[0].value);
  
  for (let i = 0; i < data.length; i++){
      const list = document.createElement('li');
      list.appendChild()
  }
})
