function changeVocals (str) {
    newStr = '';
    for(i=0;i<str.length;i++){
        if (str[i]==='a'){
            newStr+= 'b'
        } else if (str[i]==='i'){
            newStr += 'j'
        } else if (str[i]==='u'){
            newStr += 'v'
        } else if (str[i]==='e'){
            newStr += 'f'
        } else if (str[i]==='o'){
            newStr += 'p'
        } else if (str[i]==='A'){
            newStr += 'B'
        } else if (str[i]==='I'){
            newStr += 'J'
        } else if (str[i]==='U'){
            newStr += 'V'
        } else if (str[i]==='E'){
            newStr += 'F'
        } else if (str[i]==='O'){
            newStr += 'P'
        } else {
            newStr += str[i];
        }
    }
    return newStr;
  }
  
  function reverseWord (str) {
    reverseStr = '';
    for(i=str.length-1;i>=0;i--){
        reverseStr += str[i]
    }
    return reverseStr;
  }
  
  function setLowerUpperCase (str) {
    lowerUpperCaseStr = '';
    for(i=0;i<str.length;i++){
        if(str[i]===str[i].toLowerCase()){
            lowerUpperCaseStr+= str[i].toUpperCase();
        } else if (str[i] === str[i].toUpperCase()){
            lowerUpperCaseStr+=str[i].toLowerCase();
        }
    }
    return lowerUpperCaseStr;
  }
  
  function removeSpaces (str) {
    tanpaSpasi = ''
    for(i=0;i<str.length;i++){
        if (str[i]===' '){
            continue;
        } else {
            tanpaSpasi += str[i];
        }
    }
    return tanpaSpasi;
  }
  
  function passwordGenerator (name) {
    var gantiVokal = changeVocals(name);
    var balikKata = reverseWord(gantiVokal)
    var lowerUpper = setLowerUpperCase(balikKata)
    var tanpaSpasi = removeSpaces(lowerUpper)
    var password = tanpaSpasi;
    if (password.length <= 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
    return password;
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'