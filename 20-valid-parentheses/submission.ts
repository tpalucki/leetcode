function isValid(s: string): boolean {
    if(s.length % 2 != 0) return false;
    const stack = [];
    const openingBrackets = {
        "[":0,
        "]":1,
        "(":2,
        ")":3,
        "{":4,
        "}":5
    };
    for(let i = 0; i < s.length; i++) {
        if (openingBrackets[s[i]] % 2 == 0) {
            stack.push(openingBrackets[s[i]]);
            continue;
        }
        if (stack.pop() != (openingBrackets[s[i]] - 1)) {
            return false;
        }
    }
    return stack.length == 0;
}