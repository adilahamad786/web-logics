function autoFocus(first, last) {
    if (first.value.length) {
        document.getElementById(last).focus();
    } else {
        document.getElementById(last-2).focus();
    }
}