let p = document.getElementById('titulo'), e10 = document.getElementById('envol10'), e11 = document.getElementById('envol11'),img = document.getElementById('#envol4'),p1 = document.getElementById('envol8'), fundo = document.getElementById('fundo'), st = document.getElementById('st')
//eventos de mouse
function clicar(){
    img.setAttribute('src', '../img/acesa.svg')
    p1.innerText = 'A lâmpada está acesa!'
    fundo.style.background = '#044f5c'
    st.style.background = '#15045c'
    p.style.color = '#044f5c'
    p2 = 1
}
function clicar1(){
    img.setAttribute('src', '../img/apagada.svg')
    p1.innerText = 'A lâmpada está apagada!'
    fundo.style.background = '#15045c'
    st.style.background = '#044f5c'
    p.style.color = 'yellow'
}



