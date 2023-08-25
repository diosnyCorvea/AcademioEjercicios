//1.Crear un arreglo con 5 objetos, cada uno de estos objetos debe de tener las propiedades nombre, email y edad, 
//con valores asignados por ti.
//2. Crear un arreglo de nombre correos y guardar todos los correos que existan en el 
//arreglo del primer paso(debes de acceder a los correos apoyandote en lo aprendido anteriormente).

let datosPersonales = [
    {nombre: 'Juan', email: 'juan002@gmail.com', edad: '28'},
    {nombre: 'Ernesto', email: 'ernest21@gmail.com', edad: '28'},
    {nombre: 'Daniela', email: 'danih54@gmail.com', edad: '28'},
    {nombre: 'Alberto', email: 'alb3r02@gmail.com', edad: '28'},
    {nombre: 'Julia', email: 'julia98@gmail.com', edad: '28'}
    
];

let correos = ['Los Correos Son: ',  datosPersonales[0].email, datosPersonales[1].email, datosPersonales[2].email, 
datosPersonales[3].email, datosPersonales[4].email];

console.log(correos);


