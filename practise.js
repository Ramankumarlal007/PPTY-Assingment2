
// for (let i = 0; i < table.length; i++) {
//   table[i].style.backgroundColor = 'pink';
// };

// function periodicTable(params) {
  
// }
// let table = document.querySelectorAll('table tr td');
// table.forEach((e) => {
  
//   if (table !== ' ') {
//     e.style.backgroundColor = 'green';
//   } else {
//     e.style.backgroundColor = 'pink';
//   }
// })

// let table = document.querySelectorAll('.row4');

// for (let i = 0; i < 4; i++) {

//   table[i].style.backgroundColor = 'pink';
// };

// let tabledata = document.querySelectorAll('.row4');
// tabledata.forEach((e)=> {
//   e.style.backgrounColor = 'pink';
// })

// let table = document.querySelectorAll('table tr td');
// table.forEach((e) => {
//   if (e.innerText.trim() === '') {
//     e.style.backgroundColor = 'none';
//   } else {
//     e.style.backgroundColor = 'red';
//   }
// });

let table = document.querySelectorAll('table tr td');
table.forEach((e) => {
  // Check if the parent row has class 'row8' or 'row9'
  if ( e.closest('tr').classList.contains('row2') || e.closest('tr').classList.contains('row1') || e.closest('tr').classList.contains('row3') || e.closest('tr').classList.contains('row8') || e.closest('tr').classList.contains('row9')) {
    return; // Skip this iteration for rows 8 and 9
  }
  
  if (e.innerText.trim() === '') {
    e.style.backgroundColor = 'none';
  } else {
    e.style.backgroundColor = 'yellow';
  }
});

let table1 = document.querySelectorAll('table tr');
table1.forEach((row, index) => {
  if (index >= 3 && index <= 6) { // Check for rows 4, 5, 6, and 7
    let tds = row.querySelectorAll('td');
    for (let i = 1; i <= 11; i++) {
      if (i >= 2 && i <= 11) { // Check for columns 2 to 12
        tds[i].style.backgroundColor = 'skyblue';
      }
    }
  }
});





