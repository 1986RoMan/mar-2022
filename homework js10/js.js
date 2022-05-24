// Создать произвольный елемент с id = text.  Используя JavaScript,
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
const peshka= document.createElement('p')
peshka.innerText='Hello world';
document.body.append(peshka);
peshka.onclick=(e)=>{peshka.style.display='none'}

// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let forma=document.getElementsByName('formt')[0];
console.log(forma);
let knopka=document.getElementsByName('knop')[0];
console.log(knopka);
let input= document.getElementsByName('dani')[0];
console.log(input);
knopka.onclick=function (e){
    if( input.value<18 ){
        alert('Вік менше 18 років')}
}
//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
const forms=document.forms.forma1;
const forms1=document.forms.forma2;
const aForm=forms.daniForm1;
const bForm=forms.daniForm2;
const cForm=forms1.daniForm3;
const dForm=forms1.daniForm4;
const knopa=document.getElementsByName('knopka')[0];
knopa.onclick= function (e){
    console.log(aForm.value,bForm.value,cForm.value,dForm.value)
}
//Створити 3 инпута та кнопку. Один визначає кількість рядків,
// -другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const kn=document.getElementById('kn');
    const tab = document.createElement('table');
    console.log(tab);
    const a = document.getElementsByName('a')[0];
    const b = document.getElementsByName('b')[0];
    const c = document.getElementsByName('c')[0];

kn.onclick= (e)=> {
    e.preventDefault();
    tab.innerText='';
    for (let i = 0; i < a.value; i++) {
        const tr = document.createElement('tr');
        console.log(tr)
        for (let j = 0; j < b.value; j++) {
            const td = document.createElement('td')
            tr.appendChild(td);
            td.innerText = `${c.value}`
        }
        tab.appendChild(tr);
    }
    document.body.append(tab);
}

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let masyv=['fuck','dick','bitch'];
const slovo= document.getElementsByName('slovo')[0];
    console.log(slovo);
const btn=document.getElementById('bt');
console.log(btn);
btn.onclick=(e)=> {
    for (const eElement of masyv) {
        if (eElement === slovo.value) {
            alert('errrrrroooo')
        }
    }
}
//взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
const checkbox1=document.getElementById('fals');
const checkbox2=document.getElementById('more');
const checkbox3=document.getElementById('city');
checkbox1.onclick=function (e) {
    if (checkbox1.checked) {
        const filter1 = usersWithAddress.filter(value => value.status === false);
        console.log(filter1);
        for (const t of filter1) {
            const blok = document.createElement('div');
            blok.innerText = `${t.id} ${t.name} city:${t.address.city} street:${t.address.street} number:${t.address.number}`
            document.body.appendChild(blok);
        }
    }
    const her= document.createElement('hr');
    document.body.appendChild(her);
}
checkbox2.onclick=(e)=>{
    if (checkbox2.checked){
        const filter2= usersWithAddress.filter(value =>value.age>=29 );
        console.log(filter2);
        for (const t of filter2) {
            const blok2=document.createElement('div')
            blok2.innerText = `${t.id} ${t.name} city:${t.address.city} street:${t.address.street} number:${t.address.number}`
              document.body.appendChild(blok2);
        }
    }
    const her= document.createElement('hr');
    document.body.appendChild(her);
}
checkbox3.onclick=(e)=>{
    if (checkbox3.checked){
        const filter3= usersWithAddress.filter(value => value.address.city==='Kyiv');
        console.log(filter3);
        for (const t of filter3) {
            const blok3=document.createElement('div')
            blok3.innerText = `${t.id} ${t.name} city:${t.address.city} street:${t.address.street} number:${t.address.number}`
            document.body.appendChild(blok3);
        }

    }
}










