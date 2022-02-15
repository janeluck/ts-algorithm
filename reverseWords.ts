function reverseWords(s: string): string {
    const ret = [];
    let i = 0, j = 0;
    while(i < s.length){
        let start = i;
        while(i < s.length && (s[i] !== ' ')){
            i++;
        }
        for(let j = 1; j <= (i - start); j++){
            ret.push(s[i - j]);
        }
        while(i < s.length && (s[i] === ' ')){
            i++;
            ret.push(' ')
        };
    }
    return ret.join('');
};