function sorting(arrNumber) { //sorting
    for(i=0;i<arrNumber.length;i++){
        for(j=i+1;j<arrNumber.length;j++){
            if (arrNumber[i]>arrNumber[j]){
                var temp = arrNumber[i];
                arrNumber[i] = arrNumber[j];
                arrNumber[j] = temp;
            }
        }
    }
    return arrNumber;
  }
  
  
  function getTotal(arrNumber) {
    largestNumber = 0;
    occurance = 0;
    for(i=0;i<arrNumber.length;i++){
        if(arrNumber[i]>largestNumber){
            largestNumber = arrNumber[i];
        }
    }

    for(i=0;i<arrNumber.length;i++){
        if(arrNumber[i]===largestNumber){
            occurance++
        }
    }
    if (occurance > 0){
    return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${occurance} kali`;
    } else {
        return '';
    }
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''