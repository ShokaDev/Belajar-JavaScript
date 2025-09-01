function getValues() {
    const bilangan1 = parseFloat(document.getElementById('bilangan1').value);
    const bilangan2 = parseFloat(document.getElementById('bilangan2').value);
    return { bilangan1, bilangan2 };
}

function jumlah() {
    const { bilangan1, bilangan2 } = getValues();
    alert("Hasil Penjumlahan: " + (bilangan1 + bilangan2));
}

function kurang() {
    const { bilangan1, bilangan2 } = getValues();
    alert("Hasil Pengurangan: " + (bilangan1 - bilangan2));
}

function kali() {
    const { bilangan1, bilangan2 } = getValues();
    alert("Hasil Perkalian: " + (bilangan1 * bilangan2));
}

function bagi() {
    const { bilangan1, bilangan2 } = getValues();
    alert("Hasil Pembagian: " + (bilangan1 / bilangan2));
    
}
