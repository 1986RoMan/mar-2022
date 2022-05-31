//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

let formElement = document.createElement('form');
let inputElement = document.createElement('input');
let inputElement2 = document.createElement('input');
let buttonElement = document.createElement('button');
buttonElement.innerText='Vidpravka'
inputElement.type='text';
inputElement.placeholder='name';
inputElement2.placeholder='age';
inputElement2.type='number';
formElement.append(inputElement,inputElement2,buttonElement);
document.body.appendChild(formElement);
formElement.onsubmit=(e)=>{
    e.preventDefault();
    const obj={
        name:inputElement.value,
        age:inputElement2.value
    }
    console.log(inputElement.value);
    localStorage.setItem('key',JSON.stringify(obj));
    //localStorage.getItem('key');
}
const htmlhrElement = document.createElement('hr');
document.body.appendChild(htmlhrElement);

//-створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

 const htmlFormElement = document.createElement('form');
const htmlInputElement = document.createElement('input');
const htmlInputElement2 = document.createElement('input');
const htmlInputElement3 = document.createElement('input');
const htmlButtonElement = document.createElement('button');
htmlButtonElement.innerText='Vidprav'
htmlInputElement.type='text';
htmlInputElement2.type='text';
htmlInputElement3.type='number';
htmlInputElement.placeholder='model';
htmlInputElement2.placeholder='type';
htmlInputElement3.placeholder='volume';
htmlFormElement.append(htmlInputElement,htmlInputElement2,htmlInputElement3,htmlButtonElement);
document.body.append(htmlFormElement);
    masyv=[];
htmlFormElement.addEventListener('submit',function (e){
    e.preventDefault();
    obj={
        model:htmlInputElement.value,
        type: htmlInputElement2.value,
        volume: htmlInputElement3.value
    };
    masyv.push(obj);
    localStorage.setItem('key1',JSON.stringify(masyv))
})

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів
// в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ
// всіх обраних на попередньому етапі.
favorites=[];
let htmlButtonElement2 = document.createElement('button');
document.body.appendChild(htmlButtonElement2);
htmlButtonElement2.innerText='Send all users favorites'
htmlButtonElement2.className='button';
let htmlbrElement = document.createElement("br");
document.body.appendChild(htmlbrElement);
for (const user of users) {
    const htmlDivElement = document.createElement('div');
    htmlDivElement.innerText=`${user.name} ${user.age} ${user.status}`
    const htmlButtonElement1 = document.createElement('button');
    htmlButtonElement1.innerText='додати до улюблених'
    document.body.append(htmlButtonElement1,htmlDivElement);

    htmlButtonElement1.onclick =()=>{
        obj={
                      name:user.name,
                      age: user.age,
                      status:user.status
                  }
                 favorites.push(obj)
            localStorage.setItem('key3',JSON.stringify(favorites))
        //location.href=`./user-detail.html?data=${JSON.stringify(favorites)}`
              }
    htmlButtonElement2.onclick =()=>{
        obj={
            name:user.name,
            age: user.age,
            status:user.status
        }
        favorites.push(obj)
        localStorage.setItem('key3',JSON.stringify(favorites))
        location.href=`./user-detail.html?data=${JSON.stringify(favorites)}`
    }
}
//console.log(localStorage.getItem('key3'));
