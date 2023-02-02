var peso = document.getElementById('peso')
var altura = document.getElementById('altura')
var res = document.getElementById('result')
var img = document.getElementById('photoresultado')
var res2 = document.getElementById('end')

function isFloat(n){
    if (n % 1 == 0){
        return false
    } else
        return true
}

function isNumero(x){
    if( x > 0 && x < 200){
        return true 
    } 
}


function calcular(){
    if (isNumero(peso.value) && isFloat(altura.value)){
        var resultado = (Number(peso.value) / (Number(altura.value**2)))
        res.innerHTML = `O seu IMC é ${resultado.toFixed(2)}`
        if (resultado < 18.5){
            img.src = 'imagens/frango.png'
            res2.innerHTML = `Parabéns por ser um FRANGO kkkk`
        } else if (resultado < 24.99){
            img.src = 'imagens/coleman.png'
            res2.innerHTML = `Parabéns por ser o MÍNIMO`
        } else if (resultado < 29.99){
            img.src = 'imagens/ficandogordo.png'
            res2.innerHTML =`Vamo manerar no alimento amigo`
        } else{
            img.src = 'imagens/gordo.jpg'
            res2.innerHTML = `NUTRICIONISTA AGORA `
        }

    peso.value =''
    peso.focus()
    altura.value=''
    altura.focus()
        
    } else{
        window.alert('[ERROR] Valor de Peso ou Altura inválidos!')
    } 
}   