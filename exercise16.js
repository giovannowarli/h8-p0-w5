function totalDigitRekursif(angka) {
    var strAngka = String(angka);
    if (strAngka.length===1){
        return angka
    } else {
        var depan = Number(strAngka.slice(0,1));
        var belakang = Number(strAngka.slice(1,strAngka.length))
        return depan + totalDigitRekursif(belakang)
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5