const users = [
    { id: 'john', name: "John Doe", age: 25 },
    { id: 'jane', name: "Jane Smith", age: 28 },
    { id: 'susan', name: "Susan Johnson", age: 30 },
    { id: 'michael', name: "Michae lrown", age: 30 },
    { id: 'emily', name: "Emily Davis", age: 35 },
    { id: 'david', name: "David Wilson", age: 29 },
    { id: 'sarah', name: "Sarah Martinez", age: 27 },
    { id: 'robert', name: "Robert Taylor", age: 26 },
    { id: 'linda', name: "Linda Anderson", age: 32 },
    { id: 'william', name: "William Thomas", age: 21 }
];
// =============1
const arrAge = users.map((u) => {
    return u.age;
})

let count = 0;

const sumAge = arrAge.reduce((acc, cur, i) => {
    count = i + 1;
    return acc + cur;
});
console.log(arrAge);
console.log(`1. Tuổi trung bình: ${sumAge / count}, Tổng số tuổi: ${sumAge}`);

//=============2
const increaseAge = [...users].sort((u1, u2) => { // copy obj by [...users]
    return u1.age - u2.age;
});

const descreaseAge = [...users].sort((u1, u2) => {
    return u2.age - u1.age;
});

const increaseId = [...users].sort((u1, u2) => {
    let a = u1.id.toLowerCase();
    let b = u2.id.toLowerCase();

    return a === b ? 0 : a > b ? 1 : -1;
});

const descreaseId = [...users].sort((u1, u2) => {
    let a = u1.id.toLowerCase();
    let b = u2.id.toLowerCase();

    return a === b ? 0 : a > b ? -1 : 1;
})

console.log(2. + '\n');
console.log(increaseId);
console.log(descreaseId);

// console.log(arrAge);
//================ cach 2
// function sortArray(a, field, isAscending) {
//     var currentSort = a["my_sort_order"];
//     if (typeof currentSort !== 'boolean') {
//         // Chưa được sắp xếp, sử dụng thuật toán sắp xếp
//         a.sort(function (a, b) {
//             if (field === "age") {
//                 return isAscending ? a.age - b.age : b.age - a.age;
//             } else if (field === "id") {
//                 return isAscending ? a.id.toLowerCase().localeCompare(b.id.toLowerCase()) : b.id.toLowerCase().localeCompare(a.id.toLowerCase());
//             } else {
//                 return 0; // Nếu trường không được hỗ trợ, không thay đổi thứ tự
//             }
//         });
//     } else if (currentSort !== isAscending) {
//         a.reverse();
//     }
//     a["my_sort_order"] = isAscending;
// }

// Sắp xếp theo Age tăng dần
// sortArray(users, "age", true);
// console.table(users);

// Sắp xếp theo Age giảm dần
// sortArray(users, "age", false);
// console.table("Sắp xếp theo Age giảm dần:", users);

// Sắp xếp theo Name tăng dần
// sortArray(users, "id", true);
// console.table(users);

// Sắp xếp theo Name giảm dần
// sortArray(users, "id", false);
// console.log("Sắp xếp theo Id giảm dần:", users);



// ===============3
let arr1 = [], arr2 = [];
for (let i = 0; i < arrAge.length; i++) {
    if (i < 5) {
        arr1.push(arrAge[i])
    } else {
        arr2.push(arrAge[i])
    }
}

console.log(arr1, arr2);
