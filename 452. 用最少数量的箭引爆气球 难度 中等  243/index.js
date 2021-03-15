var findMinArrowShots = function (points) {
    if (!points.length)
        return 0;
    points.sort(function (a, b) {
        return a[1] - b[1];
    });
    console.log(points);
    var pos = points[0][1]; //当前射出箭的位置
    var ans = 1; //射出的箭
    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
        var balloon = points_1[_i];
        if (balloon[0] > pos) {
            pos = balloon[1];
            ans++;
            console.log(ans);
        }
    }
    return ans;
};
var points = [[10, 16], [2, 8], [1, 6], [7, 12]];
console.log(findMinArrowShots(points));
