function getLetter(s) {
    let letter;
    const firstChar = s.charAt(0);

    let setA = "aeiou";
    let setB = "bcdef";
    let setC = "hjklm";
    switch(true){
        case setA.includes(firstChar):
            letter = 'A';
            break;
        case setB.includes(firstChar):
            letter = 'B';
            break;
        case setC.includes(firstChar):
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
    }
    return letter;
}
