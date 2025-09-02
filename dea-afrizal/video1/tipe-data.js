let nama = 'Faharel' // String
// Jikalau String maka perlu menambahkan petik 1

let usia = 17 // Integer | Number
// Jikalau Integer maka perlu memasukkan angka nya saja

let tinggiBadan = 170.1 // Double Float
// Kalau ingin data yang memiliki koma seperti contoh di atas, maka cukup mengganti koma dengan titik

let beratBadan
// Kita juga bisa membuat suatu variable yang tidak ada isinya / belum ada isinya, dan tipe data ini juga bisa di isi nantinya

let pacar = 2 // Null
// Bisa juga membuat tipe data yang isinya bener bener kosong, bukan seperti sebelumnya yang cuman sekedar "Belum di isi"

beratBadan = 55
// Contoh menambahkan isi variable yang kosong, karena variable nya sudah ada jadi kita tidak perlu membuat variable dengan let lagi


// if else

    // if (pacar == null) {
    //     pacar = 'Belum punya'
    // } else {
    //     pacar = 'Udah punya'
    // }

    // Jika variable pacar nilainya null maka nilai pacar dirubah menjadi "Belum punya", namun jika variable pacar nilainya bukan null maka akan merubah nilai menjadi "Sudah punya"


//  Selain menggunakan if else, kita juga bisa menggunakan switch seperti contoh dibawah ini

switch (pacar) {
    case 1:
        pacar = 'Punya 1 aja'
    break;
    case 2: 
        pacar = 'Punya pacar 2, aku cukup playboy'
    break

    default:
        pacar = 'Belum punya pacar'
    break
}

// Yang aku pahamin disini, jika nilai dari variable pacar itu 1, maka akan merubah nilai Menjadi "Punya 1 aja", begitu juga dengan nilai 2, namun jika tidak ada case yang tersedia maka akan merubah nilai ke default



// alert ('Nama kamu adalah ' + nama + ' dan usia kamu adalah ' + usia)

alert(`Nama saya adalah ${nama} Usia saya itu ${usia} Tinggi badan saya ${tinggiBadan}cm Berat badan saya ${beratBadan}kg dan Pacar saya ${pacar}`)

// Disini kita tau kalau kita bisa memanggil suatu variable dengan ${Variable}, serta kita juga tau dari kasus ini, karena variable beratBadan itu tidak ada isinya, maka yang ditampilkan di website nya itu Undefined