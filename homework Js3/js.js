//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
 for(let i=0;i<10;i++) {
    document.write(`<div>Start</div>`)
};
document.write (`<hr>`);
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(let i=1;i<11;i++) {
    document.write(`<div>${i}Start</div>`)
};
document.write (`<hr>`);
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=0;
while (i<20){
    document.write(`<h1>Start</h1>`);
    i++;
};
document.write (`<hr>`);
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j=1;
while (j<21) {
    document.write(`<h1>${j}Start</h1>`);
    j++;
};
document.write (`<hr>`);
//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
//ШАБЛОН:
//    <ul>
//        <li>ITEM OF ARRAY</li>
//        <!--
//            і тд інші об'єкти масиву
//             ...
//             ...
//             ...
//        -->
//    </ul>
//замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let ListofItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
    for(let i=0;i<ListofItems.length;i++) {
        document.write(`<li>${ListofItems[i]}</li>`)
    }
    document.write(`</ul>`);
document.write (`<hr>`);
//Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//ШАБЛОН
//<div class="product-card">
 //   <h3 class="product-title">TITLE. Price - PRICE</h3>
//<img src="IMAGE" alt="" class="product-image">
//</div>
//Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let i=0;i<products.length;i++)
{
    document.write(`<div class="product-card">`);
    document.write(`<h3 class = "product-title">${products[i].title}-${products[i].price}</h3>`);
    document.write(`<img  src=${products[i].image} alt="" class="product-image">`);
    document.write(`</div>`);
}


