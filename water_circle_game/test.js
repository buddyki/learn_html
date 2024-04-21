// var circles = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // 使用 push() 添加新元素到第一个子数组
// console.log(circles); 
// circles[0].push(10); 
// console.log(circles); // 添加后的二维数组

// // 使用 shift() 删除第一个子数组的第一个元素
// //var shiftedElement = circles[0].shift(); 
// var shiftedElement =circles[1].splice(2, 1);
// console.log(shiftedElement); // 被删除的元素
// console.log(circles); // 删除后的二维数组

var circles = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var circle = [10, 11, 12];

// 使用 push() 将一维数组 circle 添加为 circles 的新元素
circles.splice(1, 0, circle);
circles.push(circle);

console.log(circles); // 添加后的二维数组
