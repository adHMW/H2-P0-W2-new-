var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){

    var bulan;
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    var hapusgaring = input[3].split("/");
    var gabung = hapusgaring.join("-");
    var bulan1 = input[1].toString();

    switch(hapusgaring[1]){
        case "01":
            bulan = "Januari";
        break;
        case "02":
            bulan = "Febuari";
        break;
        case "03":
            bulan = "Maret";
        break;
        case "04":
            bulan = "April";
        break;
        case "05":
            bulan = "Mei";
        break;
        case "06":
            bulan = "Juni";
        break;
        case "07":
            bulan = "Juli";
        break;
        case "08":
            bulan = "Agustus";
        break;
        case "09":
            bulan = "September";
        break;
        case "10":
            bulan = "Oktober";
        break;
        case "11":
            bulan = "November";
        break;
        case "12":
            bulan = "Desember";
        break;
    }

console.log(bulan);
console.log(hapusgaring.sort(function(a, b){return b-a}));
console.log(gabung);
console.log(bulan1.slice(0,15));

}

dataHandling2(input);


