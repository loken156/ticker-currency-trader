
function bankstats() {
    alert(`Du har ${eur} Euro och ${sek} SEK.`)
}



function buyeuro() {
    let mängdEur = parseFloat(prompt('Hur mycket Euro vill du köpa?'))
    let mängdSek = mängdEur * rate

    if (mängdSek <= sek && rate <= 10) {
        sek -= mängdSek
        eur += mängdEur
        alert(`Du har köpt ${mängdEur} Euro för ${mängdSek} SEK.`)
    } else {
        alert('Köpmisslyckande: Det är för dyrt för att handla nu')
    }
}

function sell(){
    let mängdEur = parseFloat(prompt('Hur mycket euro vill du sälja?'))
    let mängdSek = mängdEur * rate

    if (mängdEur <= eur && rate >=10) {
        eur -= mängdEur;
        sek += mängdSek;
        alert(`Du har sålt ${mängdEur} Euro för ${mängdSek} SEK.`);
    } else {
        alert('Försäljningsmisslyckande: Det är för kass kurs!') 
    }
}
