//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) додає клас з назвою групи, елементу з ід main_header
const classs=document.getElementById('main_header');
classs.classList.add('mar-2022');
console.log(classs);
//     b) робить шириниу елементу ul 400px
const ulka=document.getElementsByTagName('ul');
for (const ulkaElement of ulka) {
    ulkaElement.style.width='400px'
}
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
const linku=document.getElementsByClassName('linkList');
for (const linkuElement of linku) {
    console.log(linkuElement);
   linkuElement.style.width= '50%'
}
//     d) отримує текст який зберігається в елементі з класом listElement2
const linku2=document.getElementsByClassName('listElement2');
for (const linku2Element of linku2) {
    console.log(linku2Element.innerText);
}
//     e) отримує всі елементи li та змінює ім колір фону на сірий
const lishku=document.getElementsByTagName('li');
for (const lishkuElement of lishku) {
    lishkuElement.style.backgroundColor='silver'
}
//     f) отримує всі елементи 'a' та додає їм клас anchor
const jkoru=document.getElementsByTagName('a');
for (const jkoruElement of jkoru) {
    jkoruElement.classList.add('RRRRRR')
    console.log(jkoruElement)
}
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
//     змінює йому розмір тексту на 40 пікселів
for (const jkoruElement of jkoru) {
    if(jkoruElement.innerText==='link3'){
        jkoruElement.style.fontSize='40px'
    }

}
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const jkoruElement of jkoru) {
    let ww =jkoruElement.innerText;
    console.log(ww)
    jkoruElement.classList.add(`element_${ww}`)
    console.log(jkoruElement)
}
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let color=prompt('');
 const suberu=document.getElementsByClassName('sub-header');
for (const suberuElement of suberu) {
    suberuElement.style.backgroundColor=`${color}`;
    console.log(suberuElement)
}
//    j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку
//    якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let color2=prompt('')
for (const suber of suberu) {
    console.log(suber);
    if(suber.innerText==='content 2 segment'){
        suber.style.backgroundColor=`${color2}`;
    }
}
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
//     Текст отримати з prompt()
let textu=prompt('');
const contentList=document.getElementsByClassName('content_1');
for (const contentListElement of contentList) {
    contentListElement.innerText=`${textu}`;
    console.log(contentListElement);
}
//     l) отримати елементи p та змінити їм padding на 20px
const peshku=document.getElementsByTagName('p');
for (const peshkuElement of peshku) {
    peshkuElement.style.padding='20px'
}
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
const textu2=document.getElementsByClassName('text2');
for (const textu2Element of textu2) {
    textu2Element.innerText='mar=2022'
    console.log(textu2Element);
}