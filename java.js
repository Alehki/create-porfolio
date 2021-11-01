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

toggle.addEventListener(`click`, ()=>{
    document.body.classList.toggle(`dark`)
    if(icon.classList.contains(`fa-moon`)){
        icon.classList.replace(`fa-moon`, `fa-sun`)
        toggle__text.textContent = `Ligth Mode`
    }else{
        icon.classList.replace(`fa-sun`, `fa-moon`)
        toggle__text.textContent = `Dark Mode`
    }
})

