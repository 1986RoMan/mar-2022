
//     - Є змінна х, якій ви надаєте довільне числове значення.
//         Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=+prompt('chslo');
if( x===0){
    console.log('virno');
}
else{
    console.log('nevirno')
};
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// // до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
let time=+prompt('vedit goduny');
if (time<=15){
    console.log('persh chvert');
}
else if (time>15 && time<=30){
    console.log('dryga chvert');
}
else if(time>30 && time<=45){
    console.log('tretja chvert');
}
else if(time>45 && time<=59){
    console.log('chetverta chvert')
}
else{
    console.log('error')
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a=+prompt('chuslo 1');
let b=+prompt('chuslo 2');
if (a>b){
    console.log('max a='+ '' +a)
}
else  if (b>a){
    console.log('max b='+ '' +b)
}
else if(a===b){
    console.log('a=b'+' '+a+' '+b)
}
else{
    console.log('error')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let den= +prompt('yvedit den vid 1 do 7')
switch (den){
    case 1:
        console.log('itu na roboty');
        break
    case 2:
        console.log('itu na roboty');
        break
    case 3:
        console.log('itu na roboty');
        break
    case 4:
        console.log('itu na roboty');
        break
    case 5:
        console.log('itu na roboty');
        break
    case 6:
        console.log('Spatu');
        break
    case 7:
        console.log('Spatu');
        break
    default:
        console.log('?????/')
}