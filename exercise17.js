function kaliTerusRekursif(angka) {
    angkaArr = String(angka).split('');
    output = 1;
    for (i=0;i<angkaArr.length;i++){
        output *= Number(angkaArr[i]);
    }

    if (String(output).length === 1){
        return output
    } else {
        return kaliTerusRekursif(output);
    }

  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6