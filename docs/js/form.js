const formWhats = document.querySelector('#form-whats');
let tel = '+525519662292';
let nombre = document.querySelector('#nombre');


let fecha = document.querySelector('#fecha');
let miFecha = new Date();
let year = miFecha.getFullYear();
let mes = miFecha.getMonth()+1;
let dia = miFecha.getDate();
if(mes < 10){
    mes = `0${mes}`
};
if(dia < 10){
    dia = `0${dia}`
};
let resFecha = `${year}-${mes}-${dia}`;
fecha.value = resFecha;
//console.log(resFecha);

let hora = document.querySelector('#hora');
let h = miFecha.getHours();
let m = miFecha.getMinutes();
if(h < 10){
    h = `0${h}`;
};
if(m < 10){
    m = `0${m}`;
}
hora.value = `${h}:${m}`;

let barbero = document.querySelector('#barbero');
let servicio = document.querySelector('#servicio');
let resp = document.querySelector('#respuesta');

nombre.addEventListener('keyup', ()=>{
    selecion(nombre);
});


fecha.addEventListener('change', ()=>{
    reset();
    maxFecha = `${year +1}-${mes}-${dia}`;
    if(fecha.value.replace(/\-/g, '') < maxFecha.replace(/\-/g, '')){
        fecha.style.borderBottom="";
    }else{
        hora.classList.remove('select');
        resp.classList.add('fail');
        resp.innerHTML = `La cita no se puede agendara plazo de un año`;
        fecha.style.borderBottom="solid 2px red";
        return false
    };
    selecion(fecha);
});


if(hora.value.replace(/\:/g, '') > '0659' && hora.value.replace(/\:/g, '') < '2101'){
}else{
    resp.classList.add('fail');
    resp.innerHTML = "Horario de servicio de 7:00 am  a 21:00 pm";
    hora.classList.remove('select');
    hora.style.borderBottom="solid 5px red";
};
hora.addEventListener('change', ()=>{
    reset();
    if(hora.value.replace(/\:/g, '') > '0659' && hora.value.replace(/\:/g, '') < '2101'){
        hora.style.borderBottom="";
        resp.innerHTML = ``;
    }else{
        hora.classList.remove('select');
        resp.classList.add('fail');
        resp.innerHTML = "Horario de servicio de 7:00 am  a 21:00 pm";
        hora.style.borderBottom="solid 5px red";
        return false
    };
    selecion(hora);
});


barbero.addEventListener('change', ()=>{
    selecion(barbero);
});
servicio.addEventListener('change', ()=>{
    selecion(servicio);
});


formWhats.addEventListener('change', ()=>{
    if(tel != '' & nombre.classList.contains('select') & fecha.classList.contains('select') & hora.classList.contains('select') & barbero.classList.contains('select') & servicio.classList.contains('select')){
        document.querySelector('.btn').classList.add('active');
    }else{
        document.querySelector('.btn').classList.remove('active');
    };
});
formWhats.addEventListener('submit', e =>{
    e.preventDefault();
    reset();
    //var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    let url = `https://api.whatsapp.com/send?phone=${tel}&text=
                *_Barberia Lider_*%0A
                *Reservas*%0A%0A
                *¿Cual es tu nombre?*%0A${nombre.value}%0A
                *Indica la fecha de tu reserva*%0A${fecha.value}%0A
                *Indica la hora de tu reserva*%0A${hora.value}%0A
                *Barbero de preferencia*%0A${barbero.value}%0A
                *¿Cual es el servicio que se desea realizar?*%0A${servicio.value}`;

    if(nombre.value === "" || fecha.value === "" || hora.value === ""){
        resp.classList.add('fail');
        resp.innerHTML += `Faltan algunos datos, ${nombre.value}`;
        console.log('Faltan dato o se experimenta un error');
        return false;
    };
    if(barbero.value === "Seleccionar..." || servicio.value === "Seleccionar..."){
        resp.classList.add('fail');
        resp.innerHTML += `Faltan algunos datos, ${nombre.value}`;
        console.log('Faltan dato o se experimenta un error');
        return false;
    };
    
    resp.classList.remove('fail');
    resp.classList.add('send');
    resp.innerHTML= `Se ha enviado tu reserva, ${nombre.value}`;
    window.open(url);
    //console.log(url +' Mensaje enviado');

});


function selecion(ipt){
    if(ipt.value != ""){
        ipt.classList.add('select');
    }else{
        ipt.classList.remove('select');
    };
    //console.log(ipt.value);
};

function reset(){
    resp.innerHTML= ``;
    resp.classList.remove('fail');
    resp.classList.remove('send');
};