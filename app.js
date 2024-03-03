// e = enter
// i = imes
// a = ai
// o = ober
// u = ufat



// Lógica para cifrar
function cifrar () {
  
  let valor = document.querySelector('.mensaje-a-encriptar').value; 
  let letras = valor.split("");  
  if(valor === valor.toLowerCase()){  
    for(let i = 0; i < letras.length;i++){
    if(letras[i] === 'a'){
      letras[i] = 'ai';
    }else if(letras[i] === 'e'){
      letras[i] = 'enter';
    }else if(letras[i] === 'i'){
      letras[i] = 'imes'
    }else if(letras[i] === 'o'){
      letras[i] = 'ober'      
    }else if(letras[i] === 'u'){
      letras[i] = 'ufat'
    }

  }
}else{
  alert('No se permiten Mayúsculas, simbolos ni numeros');
}
  let descifradoFinal = letras.join("");
  console.log(descifradoFinal);
  document.querySelector('.mensaje-cifrado').value = descifradoFinal;
  document.querySelector('.mensaje-a-encriptar').value = '';
  

 }
 
//  Lógica Desccifrado
 function descifrar () { 

  let mensajeEncriptado = document.querySelector('.mensaje-a-desencriptar').value;
  if (mensajeEncriptado === mensajeEncriptado.toLowerCase()){  
    if (mensajeEncriptado.includes('enter')||mensajeEncriptado.includes('imes')||mensajeEncriptado.includes('ai')||mensajeEncriptado.includes('ober')||mensajeEncriptado.includes('ufat')){
      n1 = mensajeEncriptado.replaceAll('enter','e');
      n2 = n1.replaceAll('imes','i');
      n3 = n2.replaceAll('ai','a');
      n4 = n3.replaceAll('ober','o');
      n5 = n4.replaceAll('ufat','u');   
  
 
    }
    console.log(n5);
    document.querySelector('.mensaje-a-encriptar').value = n5;
    document.querySelector('.mensaje-a-desencriptar').value = '';
  }else{
    alert('No se permiten Mayúsculas, simbolos ni numeros');
  }
}
 
  // Proceso de copiado
  let btnCopiar = document.querySelector('.boton-copiar');      
  let textoCopiado = "";
  let textoCopiar = document.querySelector('.mensaje-texto-copiado');
  let copiadoEncendido = null;  
//  función de copiado
  btnCopiar.addEventListener("click", function copiarElTexto () {
    copiadoEncendido = true;
    let copiarDesencriptado =  document.querySelector('.mensaje-a-desencriptar').value;
    let copiarPorEncriptar = document.querySelector('.mensaje-a-encriptar').value;       
    if( copiarDesencriptado != ""){
      textoCopiado = document.querySelector('.mensaje-a-desencriptar').value;  
    }else if (copiarPorEncriptar =! ""){
       textoCopiado = document.querySelector('.mensaje-a-encriptar').value;
    }
    // console.log(`Texto copiado:  ${textoCopiado}`);
    navigator.clipboard.writeText(textoCopiado);
    textoCopiar.innerHTML = 'Texto Copiado';
    
    
  });
 


  let areaDePegado = document.querySelector('.area-pegar');
  btnPegar = document.querySelector(".boton-pegar");


  
  
  
 
  

  
 
 
  