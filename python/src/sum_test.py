from sum import add
from sum import llen


def test_answer():
    assert add([1, 2, 3]) == 6


def test_llen():
    assert llen([1, 2, 3]) == 3
