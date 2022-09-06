class Node:
    value = None
    nextNode = None


class Stack:

    __first = None

    def __init__(self) -> None:
        self.thing = 13

    def push(self, val):
        node = Node()
        node.value = val
        if self.__first is not None:
            node.nextNode = self.__first
        self.__first = node

    def pop(self):
        val = None
        if self.__first is not None:
            val = self.__first.value
            self.__first = self.__first.nextNode
        return val

    def isEmpty(self) -> bool:
        return self.__first is None

    def peek(self):
        return None if self.__first is None else self.__first.value
