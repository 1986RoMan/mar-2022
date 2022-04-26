//1  створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function plosha(a,b){
let result=a*b;
return result
}
console.log(plosha(3, 5));
//2 створити функцію яка обчислює та повертає площу кола з радіусом r
function kryg(r){
  let  ploshaKryga=3.14*Math.pow(r,2);
    return ploshaKryga
}

console.log(kryg(3));
//3  створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function chulindr(h,r){
  let result=2*3.14*r*h+2*3.14*Math.pow(r,2);
    return result
}
console.log(chulindr(3, 3));
//4  створити функцію яка приймає масив та виводить кожен його елемент
function masuv(array){
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        console.log(arrayElement)
    }
}
masuv([1,2,3]);
//5 створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(text){
    document.write(`<p>${text}</p>`)
}

paragraf('start');
//6 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulka(text){
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
ulka('Error')
//7 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulka2(text,lishka) {
    document.write(`<ul>`)
    for (let i = 0; i <lishka; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
ulka2('Finish',3);
//8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
function masuv3(arry){
    for (const arryElement of arry) {
        console.log(arryElement)
    }
}
masuv3([2313,'oslo',true]);
//9 створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function obekt(users){
    for (const arrayElement of users) {
        document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`)
    }
}
obekt( [
    {id:1,name: 'vasya', age: 31},
    {id:2,name: 'petya', age: 30},
    {id:3,name: 'kolya', age: 29},
    {id:4,name: 'olya', age: 28},
    {id:5,name: 'max', age: 30},
    {id:6,name: 'anya', age: 31},
    {id:7,name: 'oleg', age: 28},
    {id:8,name: 'andrey', age: 29},
    {id:9,name: 'masha', age: 30},
    {id:10,name: 'olya', age: 31},
    {id:11,name: 'max', age: 31}
]);
// сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function masuv4(arry){
    let summa=0;
    for (let arryElement of arry) {
        summa=summa+arryElement;
    }
    return summa
}
console.log(masuv4([1, 2, 10]));
//11 створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function masuv5(a,b,c) {
    if(a<b && a<c){
        console.log(a);
    }else if(b<a && b<c){
        console.log(b)
    }else {
        console.log(c)
    }
}
masuv5(4,2,1);
//12 створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function masuv6(arry){
    let summa=0;
    let sumserdne;
    for (let arryElement of arry) {
        summa=summa+arryElement;
        sumserdne=summa/arry.length
    }
    return sumserdne
}
console.log(masuv6([9, 2, 10]));