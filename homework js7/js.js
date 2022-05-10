//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
};
let users=[]
let user1= new User(1,'Oleg','Red','kfjhsklj@ua.com',36218767) ;
console.log(user1);
let user2= new User(2,'Vasja','Black','kfjhskljsd@ua.com',32218767) ;
console.log(user2);
let user3= new User(3,'Olesja','Ferenes','kfgfdjhsklj@ua.com',36218767)
let user4= new User(4,'Petja','Repin','kfjhskldj@ua.com',36658767)
let user5= new User(5,'Roma','Livin','kfjsshsklj@ua.com',36458767)
let user6= new User(6,'Tamara','Grek','kfjfghsklj@ua.com',36298767)
let user7= new User(7,'Dima','Jons','kfjhskljgf@ua.com',36218787)
let user8= new User(8,'Stas','lyna','kfjhsksadlj@ua.com',31418767)
let user9= new User(9,'Stefan','Serna','kfsdfhjhsklj@ua.com',88218767)
let user10= new User(10,'Valaj','Neznauko','rewkfjhsklj@ua.com',99218767)
console.log(users=[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10]);

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filtryvannja =users.filter(value =>value.id%2===0 );
console.log(filtryvannja);

//Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortyvannja=users.sort((a,b)=>a.id-b.id);
console.log(sortyvannja);

// створити класс для об'єктів Client з полями id, name, surname ,
// email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
class Clientopp {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clienter=new Clientopp(6,'Tamara','Grek','kfjfghsklj@ua.com',36298767,['milk','juice','tomato'])
let  client1= new Client(1,'Oleg','Red','kfjhsklj@ua.com',36218767,['milk','juice','tomato','tea']);
let client2= new Client(2,'Vasja','Black','kfjhskljsd@ua.com',32218767,['milk','juice','tomato']);
let client3= new Client(3,'Olesja','Blanka','kfjhskljsd@ua.com',32218767,['juice','tomato']);
let client4= new Client(4,'Petja','Repin','kfjhskldj@ua.com',36658767,['milk','tomato','tea']);
let client5= new Client(5,'Roma','Livin','kfjsshsklj@ua.com',36458767,['milk','juice','tomato','tea']);
let client6= new Client(6,'Tamara','Grek','kfjfghsklj@ua.com',36298767,['milk','juice','tomato']);
let client7= new Client(7,'Dima','Jons','kfjhskljgf@ua.com',36218787,['juice','tomato']);
let client8= new Client(8,'Stas','lyna','kfjhsksadlj@ua.com',31418767,['milk','juice','tomato']);
let client9= new Client(9,'Stefan','Serna','kfsdfhjhsklj@ua.com',88218767,['tea','tomato']);
let client10= new Client(10,'Valaj','Neznauko','rewkfjhsklj@ua.com',99218767,['tea','tomato','milk']);
let clients=[client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];
console.log(clients);
//Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortOrder=clients.sort((a,b)=>a.order.length-b.order.length);
console.log(sortOrder);
//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
//     і додає його в поточний об'єкт car
function Car (model,country,year,maxSpeed,engineCapacity) {
    this.model = model;
    this.country = country;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(`      
                     model-${this.model}
                     country-${this.country}   
                     year-${this.year}
                      maxSpeed-${this.maxSpeed}
                      engineCapacity-${this.engineCapacity}       
                             `)
    }

    this.increaseMaxSpeed = function (newSpeed) {
        console.log(`максимальна швидкість тепер=${newSpeed}`)
    }
    this.changeYear = function (newValue) {
        console.log(`Змінений рік випуску на ${newValue}`)
    }
    this.addDriver = function (driver) {
        console.log(`дані про імя водія ${driver.name} років-${driver.year}`)
    }
}
let car1=new Car('BMW','Germany',2021,280,350);
car1.drive();
car1.info();
car1.increaseMaxSpeed(250);
car1.changeYear(2020);
let driver=car1.driver={name:'MAX',year:34}
car1.addDriver(driver);

//(Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
//     і додає його в поточний об'єкт car
class Car2 {
    constructor(model, country, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.country = country;
        this.engineCapacity = engineCapacity;
        this.year = year;
        this.maxSpeed = maxSpeed;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log(`      
                     model-${this.model}
                     country-${this.country}   
                     year-${this.year}
                      maxSpeed-${this.maxSpeed}
                      engineCapacity-${this.engineCapacity}       
                             `)
    }

    increaseMaxSpeed (newSpeed) {
        console.log(`максимальна швидкість тепер=${newSpeed}`)
    }
    changeYear (newValue) {
        console.log(`Змінений рік випуску на ${newValue}`)
    }
}

let car2=new Car2('Toyota','Japan',2018,222,140);
console.log(car2)
car2.drive();
car2.info();
car2.increaseMaxSpeed(230);
car2.changeYear(2017);
let driver1=car2.driver1 = {name:'' , year:''};
console.log(driver1)
function addDriver1 (driver1)
{
    console.log(car2);
}
addDriver1(driver1.name='ROMA',driver1.year=45);

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka{
    constructor(name, year, size) {
        this.name = name;
        this.year = year;
        this.size = size;
    }
}
let popelushka1= new Popelushka('Ira',23,37);
let popelushka2= new Popelushka('Tamara',24,32);
let popelushka3= new Popelushka('Lena',25,35);
let popelushka4= new Popelushka('Galja',26,37);
let popelushka5= new Popelushka('Slava',25,34);
let popelushka6= new Popelushka('olja',28,35);
let popelushka7= new Popelushka('Sveta',29,38);
let popelushka8= new Popelushka('Lera',25,35);
let popelushka9= new Popelushka('Vika',31,39);
let popelushka10= new Popelushka('Olesja',32,36);
let popelushku=[];
popelushku.push(popelushka1,popelushka2,popelushka3,popelushka4,popelushka5,popelushka6,popelushka7,popelushka8,popelushka9,popelushka10);
console.log(popelushku)
class Princh{
    constructor(name, year, size) {
        this.name = name;
        this.year = year;
        this.size = size;
    }
}
let princh=new Princh('Lena',25,35)
for (const popelushka of popelushku) {
    if(popelushka.year===princh.year && popelushka.size===princh.size && popelushka.name===princh.name){
        console.log(`Принц знайшов попелюшку ${popelushka.name}`)
    }
}
console.log(popelushku.find(value => value.size === princh.size && value.name===princh.name && value.year===princh.year));