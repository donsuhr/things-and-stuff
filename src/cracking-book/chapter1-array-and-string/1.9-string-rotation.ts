/*
 Assumeyouhaveamethodi5Sub5tringwhichchecksifonewordisasubstring of another.
 Given two strings, s1 and s2, write code to check if s2 is a rotation of s1
 using only one call to i5Sub5tring (e.g., "waterbottle" is a rotation of"
 erbottlewat").
 */

export function isRotation(s1: string, s2: string) {
    return `${s1}${s1}`.includes(s2) && s1.length === s2.length;
}
