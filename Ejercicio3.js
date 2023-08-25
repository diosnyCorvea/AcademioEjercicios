//Crear un objeto de nombre user son las propiedades nombre, apellidos y edad, 
//despues de crear el objeto crear una nueva variable llamada nombreCompleto de tipo string y
//guardar en esta variable el nombre y el apellido concatenados.



var user = {
    nombre :'Diosniel',
    apellido : 'Corvea',
    edad : 'Martinez',
};

var nombreCompleto = ('Su nombre es' + ' ' + user.nombre + ' ' +  user.apellido);
console.log(nombreCompleto);
