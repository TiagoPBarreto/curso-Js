function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById("txtano")
    let res = document.getElementById("res")
    if (fano.value.length == 0 || Number (fano.value) > ano) {
    window.alert(' [ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ""
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','foto-bebe-homem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','foto-jovem-homem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','foto-homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso.png')
            }
            
        } else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','foto-bebe-mulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','foto-mulher-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','foto-mulher-adulta.png')
            } else {
                //idosa
                img.setAttribute('src','foto-idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${ genero } com ${idade} anos`
        res.appendChild(img)
    }
}

