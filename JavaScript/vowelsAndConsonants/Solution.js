function vowelsAndConsonants(s) {
    const consonant = [];
    for(const alp of s){
        if ('aeiou'.includes(alp)){
            console.log(alp);
        }
        else{
            consonant.push(alp);
        }
    }
   console.log(consonant.join("\n"));
}
