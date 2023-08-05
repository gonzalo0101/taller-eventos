function saludar() {
    alert("Hola!");
  }
  
  const divElement = document.querySelector('div');
divElement.addEventListener('click', function(event) {
  event.stopPropagation(); 
  alert("Hola! Soy el div");
});