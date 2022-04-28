// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let pr=(a,b)=>{return a*b};
console.log(pr(2, 3));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let  ploshaKryga= (r)=>3.14*Math.pow(r,2);
console.log(ploshaKryga(5));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let chlindr=(h,r)=>2*3.14*r*h+2*3.14*Math.pow(r,2);
console.log(chlindr(4, 5));
// - створити функцію яка приймає масив та виводить кожен його елемент
let masuvElement=(array)=>{
    for (let i = 0; i < array.length; i++) {

        const arrayElement = array[i];
        console.log(arrayElement)
    }
    return
};
masuvElement([12, 3, 2, 56, 6, 7]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraf=(text)=>document.write(`<p>${text}<p/>`)
paragraf("hello")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulki=(text)=>{
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
ulki('stop');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulki2=(text,num)=>{
    document.write(`<ul>`)
    for (let i = 0; i <num; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
};
ulki2('go!!',3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let masuv3=(array)=>{
    for (const arryElement of array) {
        console.log(arryElement)
    }
}
masuv3([2313,'oslo',true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let obekt=(users)=>{
    for (const arrayElement of users) {
        document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`)
    }
}
obekt( [
    {id:1,name: 'vasya', age: 31},
    {id:2,name: 'petya', age: 30},
    {id:3,name: 'kolya', age: 29},
    {id:4,name: 'olya', age: 28},
    {id:5,name: 'max', age: 30}
]);
// - створити функцію яка повертає найменьше число з масиву
let minimum=(array)=>{
    let min=array[0];
    for (const arrayElement of array) {
        if (arrayElement<min){
            min=arrayElement
        }
    }
    return min
}
console.log(minimum([1, 2, 3, 4, 5, 6, 7, -32]));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
let summa=(array)=>{
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        const arryElement = array[i];
        sum+=arryElement;
    }
    return sum
}
console.log(summa([1, 2,10]));
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
let masuvObektiv=(array)=>{
    ara2=[];
    for (let i = 0; i < array.length; i++) {
        const araElement = array[i]}
        ara2= [array[1],array[0]];
        console.log(ara2);
return ara2
}
masuvObektiv([
    {id:1,name: 'vasya', age: 31},
    {id:2,name: 'petya', age: 30}])
// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let masuv6=(array)=>{
    let summa=0;
    let sumserdne;
    for (let arryElement of array) {
        summa=summa+arryElement;
        sumserdne=summa/array.length
    }
    return sumserdne
}
console.log(masuv6([9, 2, 10]));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
let maxmin=(array)=>{
    let max=array[1];
    let min=array[0];
    for (const item of array) {
        if(item<min){
            min=item
        }
        else if(item>max){
            max=item
            console.log(max)
        }
    }
        return min
}
 console.log(maxmin([325352212,526,3,4,67,-5435,8,69,22,432536,6]));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// та виводить його.
let randomni=()=>{
    let masiv=[];
    for (let i = 0; i<100; i++) {
   masiv[i]=Math.round(Math.random(i)*100)
    }
        console.log(masiv)
}
randomni();
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
let randomni2=(n)=>{
    let masiv=[];
    for (let i = 0; i<n; i++) {
        masiv[i]=Math.round(Math.random(i)*100)
    }
    console.log(masiv)
}
randomni2(20);
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let masuvRevers=(array)=>{
    ri=array.length-1;
    ara2=[];
    for (const araElement of array) {
        ara2[ri]=araElement
    ri--;
    }
    console.log(ara2)
}
masuvRevers([1,2,3]);

