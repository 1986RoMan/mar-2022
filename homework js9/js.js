//Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const blok= document.createElement('div');
blok.classList.add('wrap', 'collapse', 'alpha', 'beta');
document.body.appendChild(blok);
const blokClone= blok.cloneNode(true);
document.body.append(blokClone);
    console.log(blok);
console.log(blokClone);
// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menu=document.getElementsByClassName('menu')[0];
console.log(menu);
let masuv= ['Main','Products','About us','Contacts'];
for (const string of masuv) {
let li=document.createElement('li');
li.innerText=`${string}`
menu.append(li)
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const arrayElement of coursesAndDurationArray) {
    console.log(arrayElement.title)
    for (const arrayElementKey in arrayElement) {
        const elementu = document.createElement('div')
        elementu.innerText = `${arrayElementKey}-${arrayElement[arrayElementKey]}`
        document.body.append(elementu);
    }
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,в якому буде
// <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const arrayElement of coursesAndDurationArray) {
    const divka= document.createElement('div');
       const hka=document.createElement('h1');
       const pshka=document.createElement('p');
    divka.classList.add('item');
    hka.className=`${arrayElement.title}`;
    pshka.className=`${arrayElement.monthDuration}`
    document.body.append(divka);
    divka.appendChild(hka);
    divka.appendChild(pshka)
}