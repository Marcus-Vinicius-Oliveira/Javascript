function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0) {
        window.alert('Favor digitar uma data')
    } else if (fano.value > ano) {
        window.alert('O ano digitado é maior que o atual, corrija a informação!')
    } else {        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosohomem.png')
            }                   
           
            
        } else if (fsex [1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultomulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosamulher.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
        res.appendChild(img)

    }
    
        
    
}