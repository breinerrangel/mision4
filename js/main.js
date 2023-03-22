 
const datos=JSON.parse(localStorage.getItem("datos"))
for(let i=0;i<datos.length;i++){
    if(datos[i].area=="docencia"){
        document.getElementById("nombre-docencia").innerHTML=`${datos[i].nombre} ${datos[i].apellido}`

    }
    else if(datos[i].area=="tecnologia"){
        document.getElementById("").innerHTML=`${datos[i].nombre} ${datos[i].apellido}`

    }
}






