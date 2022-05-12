//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// - Напишіть код,  котрий :
//     -- отримує текст з параграфа з id "content"
const par= document.getElementById('content');
console.log(par.innerText);
//     -- отримує текст з блоку з id "rules"
const divka=document.getElementById('rules');
console.log(divka.innerText)
//     -- замініть текст параграфа з id 'content' на будь-який інший
par.innerText='RRRRRRRRR';
console.log(par);
//     -- замініть текст параграфа з id 'rules' на будь-який інший
divka.innerText='PPPPPPPPPPP'
console.log(divka)
//     -- змініть кожному елементу колір фону на червоний
//   1 Варіант
// let all=document.body.children;
// console.log(all);
// for (const allElement of all) {
//     allElement.style.backgroundColor='red'
// }
// 2 Варіант
 const pesku=document.getElementsByTagName('p')
for (const peskuElement of pesku) {
    peskuElement.style.backgroundColor='red'
}
 const lishku =document.getElementsByTagName('li');
for (const lishkaElement of lishku) {
    lishkaElement.style.backgroundColor='red'
}
 const divku=document.getElementsByTagName('div');
for (const divkuElement of divku) {
    divkuElement.style.backgroundColor='red'
}
// const ulku=document.getElementsByTagName('ul');
// for (const ulkuElement of ulku) {
//     ulkuElement.style.backgroundColor='red'
// }
//     -- змініть кожному елементу колір тексту на синій
 //  1 Варіант
 let all=document.body.children;
console.log(all);
 for (const allElement of all) {
     allElement.style.color='blue'
 }
//
// for (const peskuElement of pesku) {
//     peskuElement.style.color='blue'
// }
// for (const lishkaElement of lishku) {
//     lishkaElement.style.color='blue'
// }
// for (const divkuElement of divku) {
//     divkuElement.style.color='blue'
//}
// const ulku=document.getElementsByTagName('ul');
// for (const ulkuElement of ulku) {
//     ulkuElement.style.color='blue'
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(divka.classList);
//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
let rules=document.getElementsByClassName('fc_rules');
for (const rule of rules) {
    console.log(rule)
    rule.style.color='red'
}