class personas{
    nombre
    edad
    correo
    direccion
    usuario
    area
    apellido
    constructor(nombre,edad,correo,usuario,apellido,direccion,area){
        this.nombre=nombre
        this.edad=edad
        this.correo=correo
        this.usuario=usuario
        this.apellido=apellido
        this.direccion=direccion
        this.area=area
    }
 }



const registro=[]
let informacion=[]
let nombre=document.getElementById("nombre")
let apellido=document.getElementById("apellido")
let correo=document.getElementById("email")
let edad=document.getElementById("edad")
let direccion=document.getElementById("direccion")
let usuario=document.getElementById("usuario")
let enviar=document.getElementById("enviar")
let area=document.getElementById("area")
enviar.addEventListener("click",()=>{ 
    const añadidos=new personas(nombre.value,edad.value,correo.value,usuario.value,apellido.value,direccion.value,area.value)
    
    if(registro.find(Element=>Element.usuario==usuario.value)){
        alert("usuario ya existente")
        
    }
    else{ 
        registro.push(añadidos)
        if(localStorage.getItem("dato")==null){
            
            console.log("almacenamiento local esta vacio")
          
           
        }
        else{
            informacion=JSON.parse(localStorage.getItem("dato")) 
    
           

        }
        informacion.push({nombre:nombre.value,edad:edad.value,correo:correo.value,usuario:usuario.value,apellido:apellido.value,direccion:direccion.value,area:area.value
      
        })
        localStorage.setItem("dato",JSON.stringify(informacion))
        location.href="index.html"
    
         
   
    }
     
   
   

   
    
   
    
    
   
    
})
    
    
    





