# ========== Helpers ==========
def time_to_seconds(t: str) -> int:
    """Convert a 'M:SS' or 'H:MM:SS' timestamp string into total seconds."""
    parts = t.split(':')
    return int(parts[0]) * 60 + int(parts[1]) if (len(parts) == 2) else int(parts[0]) * 3600 + int(parts[1]) * 60 + int(parts[2])
