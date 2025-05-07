if (document.querySelector('*[aria-label="تعرف على الأشخاص الذين تفاعلوا مع هذا"] div') !== null) {
    document.querySelector('*[aria-label="تعرف على الأشخاص الذين تفاعلوا مع هذا"] div').click();
}

if (document.querySelector('*[aria-label="See who reacted to this"] div') !== null) {
    document.querySelector('*[aria-label="See who reacted to this"] div').click();
}

setTimeout(function () {
    highlightedItems = document.querySelectorAll('*[aria-label="Reactions"] > div');

    highlightedItems.forEach(function (userItem) {
        userItem.scrollBy(0, 99999);
    });
}, 1500);