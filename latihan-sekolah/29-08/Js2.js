    let nilai = 90; 
    let hasil 

        console.log ("Nilai anda = " + nilai)
        
        if(nilai <= 100 && nilai >= 80){
            hasil = "Grade A"
            console.log ("Grade anda adalah A");
        } else if (nilai < 80 && nilai >= 60){
            hasil = "Grade B"
            console.log ("Grade anda adalah B");
        } else if (nilai < 60 && nilai >= 40){
            hasil = "Grade C"
            console.log ("Grade anda adalah C");
        } else{
            console.log("Nilai tidak Valid");
        }
            document.write("Nilai anda adalah " + (nilai) + ", Dan grade kamu " + (hasil))