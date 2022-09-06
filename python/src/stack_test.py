from stack import Stack


def test_answer():
    instance = Stack()
    assert instance.isEmpty() is True


def test_push():
    instance = Stack()
    instance.push(12)
    instance.push(1)
    assert instance.pop() == 1
    assert instance.pop() == 12
