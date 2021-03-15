var findMinArrowShots = function(points:number[][]) {
    if(!points.length)return 0;
    points.sort((a,b)=>a[1]-b[1]);
    console.log(points);
    let pos=points[0][1];//当前射出箭的位置
    let ans=1;//射出的箭
    for(let balloon of points){
        if(balloon[0]>pos){
            pos=balloon[1];
            ans++;
        }        
    }
    return ans
}

var points = [[10,16],[2,8],[1,6],[7,12]];
console.log(findMinArrowShots(points));