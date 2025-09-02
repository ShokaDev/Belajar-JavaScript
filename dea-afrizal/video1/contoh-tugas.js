// Tugas dari mas dea Afrizal

/*
Tugas 1. Promp untuk mengetahui saldo akhir dari apa yang di input user
Tugas 2. Menentukan hari dari tanggal yang ada saat ini di pc kalian
**/


// Tugas 1
let saldoAwal = Number(prompt("Masukkan saldo awal anda: "))
let saldoTambahan = Number(prompt("Masukkan saldo tambahan anda: "))
const saldoAkhir = saldoAwal + saldoTambahan

// console.log(SaldoAkhir)
alert(saldoAkhir);



// Tugas 2
let hari = new Date();
let indexHari = hari.getDay(); // pake variabel 'hari' & huruf D besar
let namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

alert("Hari ini adalah: " + namaHari[indexHari]);
