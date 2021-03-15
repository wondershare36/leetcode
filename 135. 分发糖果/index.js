var candy = function (ratings) {
    const n = ratings.length;
    let ret = 1;
    let inc = 1, dec = 0, pre = 1;

    for (let i = 1; i < n; i++) {
        if (ratings[i] >= ratings[i - 1]) {
            dec = 0;
            if (ratings[i] === ratings[i - 1]) pre = 1;
            else pre++;
            ret += pre;
            inc = pre;
        } else {
            dec++;
            if (dec === inc) {
                dec++;
            }
            ret += dec;
            pre = 1;
        }
        console.log(ret);
    }
    return ret;
};
// console.log(candy([1, 0, 2]));
// console.log(candy([1, 3, 4, 5, 2]));
console.log(candy([29, 51, 87, 87, 72, 12]));