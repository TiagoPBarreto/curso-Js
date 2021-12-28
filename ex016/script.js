function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0|| fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Dados incompletos')
        res.innerHTML = 'impossivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert(' Passo invalido! considerando PASSO 1 ')
            P = 1
        }
        if (i < f) {
            // contagem crescente//
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F603}`
            }
           
        } else {
            // contagem regressiva//
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F603}`
            }
            
        }
        res.innerHTML += `\u{1f3c1}`
    }
    
}


 

