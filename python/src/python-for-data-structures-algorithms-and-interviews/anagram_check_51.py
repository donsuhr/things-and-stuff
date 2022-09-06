def check(str1: str, str2: str) -> bool:
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()

    if len(str1) != len(str2):
        return False

    charMap = {}
    for char in str1:
        charMap[char] = charMap.get(char, 0) + 1

    for char in str2:
        if (char not in charMap) or (charMap[char] == 0):
            return False
        charMap[char] -= 1

    for charCount in charMap.values():
        if charCount != 0:
            return False

    return True
