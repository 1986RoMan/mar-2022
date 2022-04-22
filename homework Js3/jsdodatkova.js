//1. Створити пустий масив та :
//    a. заповнити його 50 парними числами за допомоги циклу.
//    b. заповнити його 50 непарними числами за допомоги циклу.
//    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let masuv1=[];
for(i=0;i<101;i=i+2) {
    masuv1 = i
    console.log(masuv1)
}
let masuv2=[];
for(i=1;i<101;i=i+2) {
    masuv1 = i
    console.log(masuv2)
}
let masuv3=[]
for(i=0;i<20;i++) {
   masuv3=Math.random(i);
   console.log(masuv3);
}
//2. Вивести за допомогою console.log кожен третій елемен
for(i=1;i<101;i=i+3) {
    console.log(i)
}
//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for(i=0;i<101;i=i+3){
    if (i%2===0){
    console.log(i)
}
}
//5. Вивести кожен елемент масиву, сусід справа якого є парним
//EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let mas=[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i = 0; i < mas.length; i++) {
     mas[i];
    if(mas[i+1]%2===0){
        console.log(mas[i]);
    }

}
//6. Є масив з числами [100,250,50,168,120,345,188],
// Які характеризують вартість окремої покупки. Обрахувати середній чек.
let sum =0;
let arr=[100,250,50,168,120,345,188];
for (const number of arr) {
    sum=sum+number/arr.length};
     console.log(sum)
//8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
let pusto=[];
let ret=[321,'sad',2,1,4,'fsa','ffsa',123,false,231,true];
for (const retElement of ret) {
    if(typeof (retElement)==='number'){
        pusto=retElement;
        console.log(pusto);
    }
}
//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let sum1='';
let masiv=[ 'a', 'b', 'c'] ;
for (let i = 0; i < masiv.length; i++) {
    const masivElement = masiv[i];
    sum1=sum1+masivElement;
}
console.log(sum1);





