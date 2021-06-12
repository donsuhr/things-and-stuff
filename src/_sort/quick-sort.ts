function quickSort<T>(A: T[]): T[] {
    if (A.length < 2) {
        return A;
    }
    const randomIndex = Math.floor(Math.random() * A.length);
    const pivot = A[randomIndex];
    const rest = [
        ...A.slice(0, randomIndex),
        ...A.slice(randomIndex + 1),
    ];
    // const [pivot, ...rest] = list;
    const lower = rest.filter((x) => x <= pivot);
    const higher = rest.filter((x) => x > pivot);
    return [...quickSort(lower), pivot, ...quickSort(higher)];
}

export { quickSort };
