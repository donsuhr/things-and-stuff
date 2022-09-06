def add(list) -> int:
    if len(list) == 0:
        return 0
    return list[0] + add(list[1:])


def llen(list) -> int:
    if list == []:
        return 0
    return 1 + llen(list[1:])
