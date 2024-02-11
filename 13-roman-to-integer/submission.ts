const literals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

function romanToInt(s: string): number {
    let sum = 0;
    for(let i = 0; i < s.length; i++) {
        let curr = literals[s[i]];
        const next = i < s.length ? literals[s[i+1]] : 0;

        if (next > curr) {
            sum += next - curr;
            i++;
        } else {
            sum += curr;
        }
    }
    return sum;
}