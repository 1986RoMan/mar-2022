// Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)---(НЕ виконав!!!)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який
// відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар--(НЕ виконав!!!)
const button = document.getElementById('but');
const forma1 = document.forms.forma1;
console.log(forma1);
const masuv=[];
function masuvu(){
    let obj={
        name: forma1.tovar.value,
        number:forma1.kilkisti.value,
        price:forma1.price.value
    }
    if(forma1.tovar.value!==''&& forma1.kilkisti.value!=='' && forma1.price.value!=='') masuv.push(obj)
}
button.onclick=(e)=>{
    e.preventDefault();
    masuvu();
    localStorage.setItem('produkt',JSON.stringify(masuv))
}
const vidpravka = document.getElementById('a');
console.log(vidpravka)
vidpravka.onclick= (e)=>{
    e.preventDefault();
    location.href=`./list.html?dat=${JSON.stringify(masuv)}`
}

//тримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
const conteiner = document.createElement('div');

fetch('https:/jsonplaceholder.typicode.com/posts')
      .then(vavue=>vavue.json())
       .then(posts=>{
           for (const post of posts) {
               const block = document.createElement('ul');
               block.className='post'
               const divka1 = document.createElement('li');
               divka1.innerText=`${post.id} `;
               const divka2 = document.createElement('li');
               divka2.innerText=`${post.title}`;
               const divka3 = document.createElement('li');
               divka3.innerText=`${post.body}`;
               block.append(divka1,divka2,divka3)
conteiner.append(block);
           }
})
document.body.appendChild(conteiner)
conteiner.className='conteiner'

//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
const conteiner1 = document.createElement('div');
conteiner1.className='conteiner';
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(vavue=>vavue.json())
     .then(comments=>{
         for (const comment of comments) {
             const block11 = document.createElement('ul');
               block11.className='post'
               const block0 = document.createElement('li');
               block0.innerText=`${comment.id} `;
               const block1 = document.createElement('li');
               block1.innerText=`${comment.name} `;
               const block2 = document.createElement('li');
               block2.innerText=`${comment.email}`;
               const block3 = document.createElement('li');
               block3.innerText=`${comment.body}`;
               block11.append(block0,block1,block2,block3)
conteiner1.append(block11);
           }
})
document.body.appendChild(conteiner1);