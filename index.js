function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); 
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

var api = JSON.parse(Get('https://619542f674c1bd00176c6ca2.mockapi.io/api/v1/Data'));

    function filtrarData() {
        const input = document.querySelector('#inputData').value
        const filtrando = api[0].date.filter((d) => d.data === input)
        if (filtrando.length != 0) {
            const resultado = document.getElementById('result').innerHTML = "<span class='erro'>Data indisponível no momento.</span>"
        }
        else {
            const resultado = document.getElementById('result').innerHTML = "<span class='correto'>Parabéns, data disponível!</span>"
        }
    }