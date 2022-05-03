const removeFromArray = function(...args) {
    let list = args[0];
    let toRemove = args.slice(1);

    function removeNumber(number) {
        let tempList = [];
        for (let i = 0; i < list.length; i++) {
            switch (list[i]) {
                case number:
                    break;
                default:
                    tempList.push(list[i]);
            }
        }
        list = tempList;
    }

    for (let i = 0; i < toRemove.length; i++) {
        removeNumber(toRemove[i]);
    }

    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
