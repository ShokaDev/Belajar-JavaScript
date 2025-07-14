let nilai = 70; // contoh input nilai
        let grade = ""; 

        console.log ("Nilai anda = " + nilai)
    
        if(nilai <= 100 && nilai >= 80){
            console.log ("Grade anda adalah A");
        } else if (nilai < 80 && nilai >= 60){
            console.log ("Grade anda adalah B");
        } else if (nilai < 60 && nilai >= 40){
            console.log ("Grade anda adalah C");
        } else{
            console.log("Nilai tidak Valid");
        }
        // console.log("Nilai anda " + nilai + ", Maka Grade anda adalah " + grade);