function getElementsByXPath(xpath, parent) {
    let results = [];
    let query = document.evaluate(xpath, parent || document,
        null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i) {
        results.push(query.snapshotItem(i));
    }
    return results;
}

for (let btn1 of getElementsByXPath("//span[contains(., 'الأكثر ملاءمة')]"))
{
    btn1.click();
    break;
}

for (let btn1 of getElementsByXPath("//span[contains(., 'Most Relevant')]"))
{
    btn1.click();
    break;
}


setTimeout(function () {
    for (let btn2 of getElementsByXPath("//span[contains(., 'الأحدث')]"))
    {
        btn2.click();
        break;
    }
    for (let btn2 of getElementsByXPath("//span[contains(., 'Newest')]"))
    {
        btn2.click();
        break;
    }
}, 100);