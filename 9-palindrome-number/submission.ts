function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;

    let stringNumber = x.toString();

    let i = 0, j = stringNumber.length - 1;

    while(i < j) {
        if (stringNumber[i] != stringNumber[j]) return false;
        i++, j--;
    }
    return true;
}