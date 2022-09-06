from anagram_check_51 import check


def test_answer():
    assert check("abc", "cba") is True


def test_answer2():
    assert check("abcbc", "cbabb") is False


def test_answer3():
    assert check("abcbc", "cbazc") is False


def test_answer4():
    assert check("abcbcd", "abcbc") is False


def test_answer5():
    assert check("Abcbcd", "abcbcd") is True


def test_answer6():
    assert check("Ab cbc d", "abcbcd") is True
