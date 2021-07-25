var btnGenera = document.getElementById('calcolaPrezzo');
console.log(btnGenera);

btnGenera.addEventListener('click',
    function() {
        var nome = document.getElementById('nome').value;
        var km = document.getElementById('km').value;
        var fasciaEta = document.getElementById('fascia-eta').value;

        var prezzoKm = 0.21;
        var scontoMinorenne = 20;
        var scontoOver65 = 40;
        var costoBiglietto = prezzoKm* km;
        var offerta = 'biglietto standard';

        if (fasciaEta == 'minorenne') {
            costoBiglietto -= (scontoMinorenne / 100);
            offerta = 'Sconto Minorenne'
        } else if (fasciaEta == 'over65') {
            costoBiglietto -= (scontoOver65 / 100);
            offerta = 'Sconto Over65'
        }

        costoBiglietto = costoBiglietto.toFixed(2);

        var numCarrozza = Math.floor(Math.random() * 9) + 1;
        var codiceCP = Math.floor(Math.random() * (100000 - 90000)) + 90000;


        // var biglietto = document.getElementById('biglietto');
        // biglietto.style.display = "block";









    }
)

var btnAnnulla = document.getElementById('annulla');

btnAnnulla.addEventListener('click',
    function() {
        var biglietto = document.getElementById('biglietto');
        biglietto.style.display = "none";

        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('fascia-eta').value = '';

    }
)