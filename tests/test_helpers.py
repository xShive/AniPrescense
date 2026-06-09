# ========== Imports ==========
from helpers import time_to_seconds

# ========== Time Parser ==========
def test_minutes_seconds():
    assert time_to_seconds("2:30") == 150

def test_hours_minutes_seconds():
    assert time_to_seconds("1:00:00") == 3600

def test_zero():
    assert time_to_seconds("0:00") == 0

def test_typical_episode_length():
    assert time_to_seconds("23:45") == 23 * 60 + 45

def test_seconds_are_padded_correctly():
    assert time_to_seconds("1:02:03") == 3723
