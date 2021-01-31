//Creo la función iva

// Declaro la variable dato a la cual le asigno el valor que el usuario ingresa

// Dentro de IF creo la variable ivaDAto que es el IVA (21%) del importe ingresado por e usaurio.

// Dentro de IF creo la variable monto



function iva() {
  let dato = document.getElementById('numero');
  dato = dato.value;
  if (dato>0 && dato<100000000000000){
  let ivaDato = dato * 21 / 100;
  let monto = document.getElementsByClassName('monto')
  monto[0].innerHTML = `$${ivaDato} `;
  monto[1].innerHTML = ` $${parseFloat(dato) + parseFloat(ivaDato)} `;
  }else{
      alert('El numero ingresado no es valido, por favor asegurese de que esta ingresando un número, y que no es un número negativo.');
  }
  }