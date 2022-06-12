function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
             
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#eece99'
    } else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#de9e81'
    } else {
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#275b7d'
    }
    

}