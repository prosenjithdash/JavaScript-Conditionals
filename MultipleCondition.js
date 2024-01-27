var salary = 1000000;
var live = 'Canada';

// // if (salary >= 1000000 && live == 'Canada') {
// //     console.log('Rich and Abroad People')
// // }
// // else {
// //         console.log('Not Rich and Abroad People')

// // }

// if (salary >= 1000000 && live == 'US') {
//     console.log('Rich and Us People')
// }
// else if (salary >= 1000000 && live == 'Canada') {
//     console.log('Rich and Canada People')
// }
// else if (salary >= 1000000 || live == 'India') {
//     console.log('Rich and but not a India People')
// }
// else {
//         console.log('Not Rich and Abroad People')

// }

// COMPLEX CONDITION

if ((salary >= 100000 && live == 'Canada') || (salary >= 100000 || live == 'Canada')) {
    console.log('Rich people.')
}
else {
    console.log('Do not rich people.')
}