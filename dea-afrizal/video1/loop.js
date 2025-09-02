// for loop

// looping ini ada 3 statement

// Bentuk pertama dari for loop (Tidak efektif)
for (
    let a = 1; // Variable pertama itu a dengan nilai 1 diawal
    a <= 10; // Jika a kurang dari 10
    a = a + 1 // Maka yang akan dilakukan (di kasus ini jika a kurang dari 10 maka akan menambahkan 1 nilai, jika masih kurang dari 10 maka akan terus ditambahkan sampai nilainya sesuai)
    ) { 
    console.log('Faharel Adittha') // Karena sebelumnya variable a kurang dari 10, maka teks ini akan ditampilkan terus sampai variable a mencapai nilai yang ditentukan
}
// Bisa dibilang for loop ini agar kita tidak perlu mengetik hal yang sama berkali kali kalau bisa menggunakan loop saja



// Berikut loop pada array, serupa dengan kode diatas, namun kali ini kode dibuat menjadi lebih rapi dan efektif
const namaGuru = ['Pak Iman', 'Pak Andi', 'Pak Denni', 'Bu Siti']
// console.log (namaGuru)
for (let i = 0; i < namaGuru.length; i++) {
    console.log(namaGuru[i])
}
// dengan ini kita bisa mapping si array nya





// Looping tidak cuma bisa dilakukan dengan for, tapi bisa juga dengan while, begini contohnya =
let b = 0
while (b < 10) { // Jika nilai b kurang dari 10
    b++ // Maka akan terus bertambah sampai nilai b sama dengan 10
    console.log('Faharel')
}

// Nah selain while juga ada do while, yang berati lakukan apa lalu gimana

let c = 0
do {
    c++
    console.log('Adittha')
} while (c < 10); 

// Nah mungkin mirip, tapi bedanya itu kalau Do akan mengeksekusi kode nya dulu sekali lalu dia akan mencari kondisi nya
// Berbeda dengan while yang mencari kondisi nya dulu