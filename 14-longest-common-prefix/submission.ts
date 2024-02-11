function longestCommonPrefix(strs: string[]): string {
    let commonPrefix = "";
    if (strs.length == 0) return commonPrefix;
    if (strs[0] === "") return commonPrefix;

    let charIndex = 0;
    while (charIndex <= 200) {
        let currentChar = undefined;
        for (let i = 0; i < strs.length; i++) {
            if (currentChar == undefined) {
                currentChar = strs[i][charIndex];
            }
            if (currentChar != strs[i][charIndex] || currentChar == undefined) {
                return commonPrefix;
            }
        }
        commonPrefix += currentChar;
        charIndex++;
    }
}