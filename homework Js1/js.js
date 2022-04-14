//plosha prjamokytnuka
let height= 23;
let  width=10;
let s=height*width;
console.log('plosha prjamokytnuka=' + ' ' + s)
//obem chulindra
let heightC=10;
let dc=4;
let r=dc/2;
let v=Math.pow(2,2)*3.14*heightC;
console.log(v);
//gipotenyza
let n =3;
let m=4;
let k= Math.sqrt(Math.pow(3,2)+Math.pow(4,2));
console.log(k)
//відповідний результат
console.log(5 < 6) ;
console.log(5 > 6);
console.log(5 >= 6);
console.log(5 === 6);
console.log(10 === 10);
console.log(10 == 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 !== 10);
console.log(123 === '123');
console.log(123 == '123');
//Створити об'єкт book з наступними полями :
let book={
    name:'Книга Джунглів',
    Numberopages: 160,
    genre:'Класична і сучасна проза та поезія'
};
console.log(book);
//За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
//По-Батькові та роками. та вивести в консоль
let I=prompt('імя');
console.log(I);
let B=prompt('по-батькові');
console.log(B);
let R=prompt('скільки років');
console.log(R);
//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100;
    let b = '100';
    let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
//Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт
let books=[
    {
        name:'Книга Джунглів',
        Numberopages: 160,
        genre:'Класична і сучасна проза та поезія'},
    {
        name:'Книга Джунглів',
        Numberopages: 160,
        genre:'Класична і сучасна проза та поезія'},
    {
        name:'Книга Джунглів',
        Numberopages: 160,
        genre:'Класична і сучасна проза та поезія'}
];
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);