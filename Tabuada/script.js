function tabuada() {
var num = window.document.querySelector('input#numer')
var botão = document.getElementById('res')
var tab = document.getElementById('op1')

if (num.value.length === 0) {
    window.alert('[ERRO] Digite algo em "numero"')
} else {
    var n = Number(num.value)
    let c = 1 
    tab.innerHTML = ''
    while (c <=10) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }
}




}