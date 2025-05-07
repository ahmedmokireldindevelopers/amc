function getElementsByXPath(xpath, parent) {
    let results = [];
    let query = document.evaluate(xpath, parent || document,
        null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i) {
        results.push(query.snapshotItem(i));
    }
    return results;
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function sortObj(obj) {
  return Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
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
for (let btn2 of getElementsByXPath("//span[contains(., 'الأقدم')]"))
{
    btn2.click();
    break;
}
for (let btn2 of getElementsByXPath("//span[contains(., 'Oldest')]"))
{
    btn2.click();
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




function sortByTop(buttons){

    let array = [];
    for (let btn of buttons)
    {
        var e1 = offset(btn)
        array[e1.top] = btn;
    }
    sortObj(array);

    var indexL = 0;

    for(let k1 in array){
        if (indexL == 1){
            for (let btn of buttons)
            {
                var e1 = offset(btn)
                if (e1.top == k1){
                    btn.click();
                }
            }
            break;
        }
        indexL++;
    }
}



setTimeout(function () {
    var l2 = getElementsByXPath("//span[contains(., 'الأقدم')]");
   sortByTop(l2);
 

    var l = getElementsByXPath("//span[contains(., 'Oldest')]");
   
   sortByTop(l);
    

}, 100);