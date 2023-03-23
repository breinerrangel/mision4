
const datos=JSON.parse(localStorage.getItem("dato"))
let busqueda=document.getElementById("buscar")
let tabla=document.getElementById("tabla")


   
datos.forEach(element => {
   
    
    
    if(element.area=="docencia"){
        let div1=document.createElement("div")
        div1.textContent=`${element.nombre} ${element.apellido}`
        document.getElementById("nombre-docencia").append(div1)
        let div2=document.createElement("div")
        div2.textContent=`${element.usuario}`
        document.getElementById("usuario-docencia").append(div2)
        let div3=document.createElement("div")
        div3.textContent=`${element.correo}`
        document.getElementById("correo-docencia").append(div3)
        let div4=document.createElement("div")
        div4.textContent=`${element.edad}`
        document.getElementById("edad-docencia").append(div4)
        
        

       



    }
    else if(element.area=="tecnologia"){
        let div1=document.createElement("div")
        div1.textContent=`${element.nombre} ${element.apellido}`
        document.getElementById("nombre-tecnologia").append(div1)
        let div2=document.createElement("div")
        div2.textContent=`${element.usuario}`
        document.getElementById("usuario-tecnologia").append(div2)
        let div3=document.createElement("div")
        div3.textContent=`${element.correo}`
        document.getElementById("email-tecnologia").append(div3)
        let div4=document.createElement("div")
        div4.textContent=`${element.edad}`
        document.getElementById("edad-tecnologia").append(div4)
        
        
    }
    else if(element.area=="Marketing"){
        let div1=document.createElement("div")
        div1.textContent=`${element.nombre} ${element.apellido}`
        document.getElementById("nombre.Marketing").append(div1)
        let div2=document.createElement("div")
        div2.textContent=`${element.usuario}`
        document.getElementById("usuario.Marketing").append(div2)
        let div3=document.createElement("div")
        div3.textContent=`${element.correo}`
        document.getElementById("email.Marketing").append(div3)
        let div4=document.createElement("div")
        div4.textContent=`${element.edad}`
        document.getElementById("edad.Marketing").append(div4)
        

    }
})

busqueda.addEventListener("keyup",e=>{
    
       
        
    

})



    







