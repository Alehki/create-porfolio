const colors = document.getElementById(`colors`)
const conjunto = document.querySelectorAll(`.color`)

const rootStyles = document.documentElement.style;

colors.addEventListener(`click`, (e)=>{
    if(e.target.classList.contains(`color`)){
        // Con lo siguiente, le asignamos a esa varibale el color que le llegue.
        rootStyles.setProperty("--primary-color", e.target.dataset.color)
        for(const cc of conjunto){
            cc.classList.remove(`color--active`)
        }
        e.target.classList.add(`color--active`)
    }
})


/*
Esto es importante; pues lo que hacemos es cambiar una variable particular de css.
Al hacer esto, todos los que tengan esa variable de color seran modificadas.

*/

const toggle = document.getElementById(`toggle`)
const icon = document.getElementById(`icon`)
const toggle__text = document.getElementById(`toggle__text`)

const short = document.querySelectorAll(`.short`)

toggle.addEventListener(`click`, ()=>{
    document.body.classList.toggle(`dark`)
    if(icon.classList.contains(`fa-moon`)){
        icon.classList.replace(`fa-moon`, `fa-sun`)
        toggle__text.textContent = `Modo claro`
    }else{
        icon.classList.replace(`fa-sun`, `fa-moon`)
        toggle__text.textContent = `Modo oscuro`
    }

    // Para volver negra la flecha del desplegar en modo oscuro.
    short.forEach(element => {
        element.classList.toggle(`short--invert`)
    });

})


// New

// const desplegar = document.getElementById(`desplegar`);
const desplegarArray = document.querySelectorAll(`.desplegar`);
// const proyect__info = document.getElementById(`proyect__info`);

desplegarArray.forEach(element => {
   element.addEventListener(`click`, (e)=>{
        const proyect__info = document.getElementById(`proyect__info--${element.id}`);
        const valor = proyect__info.classList.toggle(`mostrar`)
        if(valor) {
            element.firstElementChild.textContent = `Cerrar descripción`
        }else{
            element.firstElementChild.textContent = `Desplear descripción`
        }
    })
});

// Agregando un "Leer más" en desktop para que todos los proyect sean
// del mismo tamaño.

// const proyect__description = document.querySelectorAll(`.proyect__description`);


function insertAfter(e,i){ 
    if(e.nextSibling){ 
        e.parentNode.insertBefore(i,e.nextSibling); 
    } else { 
        e.parentNode.appendChild(i); 
    }
}

const proyect__description = document.querySelectorAll(`.proyect__description`);

const objetElements = []

proyect__description.forEach(element =>{

    if(element.textContent.length>206){

        // element.parentElement.classList.add(`estilos-para-las-tarjetas-abiertas`)

        const textComplet = element.textContent;
        const textPart = `${element.textContent.slice(0, 115)}....  `;
        
        const newObjet = {
            id: Math.floor(Math.random()*100+5),
            textComplet: textComplet,
            textPart: textPart
        }

        const etiquetaP = document.createElement(`P`);
        etiquetaP.textContent = `Leer mas`
        etiquetaP.setAttribute(`id`, `etiqueta-${newObjet.id}`)
        etiquetaP.setAttribute(`class`, `etiquetaP`)
        // etiquetaP.classList.add(`etiquetaP--active`)


        // Verificar la primera vez (cuando carga la pagina)
        if(window.innerWidth > 625){
            element.textContent = textPart
        }else{
            element.textContent = textComplet
        }


        // Estro es para cuando se cambie en tiempo real de movil a desktop
        addEventListener(`resize`, (e)=>{
            if(e.target.innerWidth > 625){
                element.textContent = textPart
            }else{
                element.textContent = textComplet
            }
        })
        
    
        insertAfter(element, etiquetaP)

        newObjet.btn = etiquetaP
        objetElements.push(newObjet)
    }
})

const etiquetasP = document.querySelectorAll(`.etiquetaP`);

etiquetasP.forEach(etiqueta =>{

    etiqueta.addEventListener(`click`, ()=>{

        const objeto = objetElements.find(e => `etiqueta-${e.id}` == `${etiqueta.id}`)

        if(etiqueta.textContent === "Leer mas"){
            etiqueta.previousSibling.textContent = objeto.textComplet
            etiqueta.textContent = `Cerrar`

            etiqueta.classList.add(`etiquetaP--active`)
        }else{
            etiqueta.previousSibling.textContent = objeto.textPart
            etiqueta.textContent = `Leer mas`

            etiqueta.classList.remove(`etiquetaP--active`)
        }
    })
})


// Correo

const correo = document.getElementById(`correo`);

if(window.innerWidth < 625){
    correo.setAttribute(`href`, `mailto:bazanalexander026@gmail.com?Subject=Te contacto desde tu pagina web`)
}
