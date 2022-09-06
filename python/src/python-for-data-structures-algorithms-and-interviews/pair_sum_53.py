def pair_sum(list, sum: int) -> int:
    complementMap = {}
    pairs = []
    for i, num in enumerate(list):
        complement = sum - num
        if num in complementMap:
            pairs.append([complementMap[num], i])
        complementMap[complement] = i

    print(complementMap)
    print(pairs)
    return len(pairs)
