// 1.описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
koloda=[
    {
        cardSuit:'spade',
        value:'6',
        color:'black'
    },
    {
        cardSuit:'diamond',
        value:'6',
        color:'red'
    },
    {
        cardSuit:'heart',
        value:'6',
        color:'red'
    },
    {
        cardSuit:'clubs',
        value:'6',
        color:'black'
    },
    {
        cardSuit:'spade',
        value:'7',
        color:'black'
    },
    {
        cardSuit:'diamond',
        value:'7',
        color:'red'
    },
    {
        cardSuit:'heart',
        value:'7',
        color:'red'
    },
    {
        cardSuit:'clubs',
        value:'7',
        color:'black'
    },
    {
        cardSuit:'spade',
        value:'8',
        color:'black'
    },
    {
        cardSuit:'diamond',
        value:'8',
        color:'red'
    },
    {
        cardSuit:'heart',
        value:'8',
        color:'red'
    },
    {
        cardSuit:'clubs',
        value:'8',
        color:'black'
    },
    {
        cardSuit:'spade',
        value:'9',
        color:'black'
    },
    {
        cardSuit:'diamond',
        value:'9',
        color:'red'
    },
    {
        cardSuit:'heart',
        value:'9',
        color:'red'
    },
    {
        cardSuit:'clubs',
        value:'9',
        color:'black'
    },
    {
        cardSuit:'spade',
        value:'10',
        color:'black'
    },
    {
        cardSuit:'diamond',
        value:'10',
        color:'red'
    },
    {
        cardSuit:'heart',
        value:'10',
        color:'red'
    },
    {
        cardSuit:'clubs',
        value:'10',
        color:'black'
    },
    {
        cardSuit:'spade',
        value:'ace',
        color:'black'
    },
    {
        cardSuit:'diamond',
        value:'ace',
        color:'red'
    },
    {
        cardSuit:'heart',
        value:'ace',
        color:'red'
    },
    {
        cardSuit:'clubs',
        value:'ace',
        color:'black'
    },
    {
        cardSuit:'spade',
        value:'jack',
        color:'black'
    },
    {
        cardSuit:'diamond',
        value:'jack',
        color:'red'
    },
    {
        cardSuit:'heart',
        value:'jack',
        color:'red'
    },
    {
        cardSuit:'spade',
        value:'jack',
        color:'black'
    },
    {
        cardSuit:'diamond',
        value:'queen',
        color:'red'
    },
    {
        cardSuit:'heart',
        value:'queen',
        color:'red'
    },
    {
        cardSuit:'clubs',
        value:'queen',
        color:'black'
    },
    {
        cardSuit:'clubs',
        value:'queen',
        color:'black'
    },
    {
        cardSuit:'clubs',
        value:'king',
        color:'black'
    },
    {
        cardSuit:'clubs',
        value:'king',
        color:'black'
    },
    {
        cardSuit:'clubs',
        value:'king',
        color:'black'
    },
    {
        cardSuit:'clubs',
        value:'king',
        color:'black'
    },
    {
        cardSuit: '',
        value:'joker',
        color:'red'
    },
    {
        cardSuit: '',
        value:'joker',
        color:'black'
    }
   ]
    let spadeAce=koloda.filter((value) => value.value ==='ace'&& value.cardSuit ==='spade');
    console.log(spadeAce);
    let six=koloda.filter(value => value.value==='6');
console.log(six);
let red=koloda.filter(value => value.color==='red');
console.log(red);
let diamond=koloda.filter(value => value.cardSuit==='diamond');
console.log(diamond);
let moreNine=koloda.filter(value => value.value!=='6'&&value.value!=='7'&&value.value!=='8');
console.log(moreNine);
//2. відсортувати його за спаданням за monthDuration
//   відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let spadannja= coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration);
console.log(spadannja);
let filters= coursesAndDurationArray.filter(value => value.monthDuration>5);
console.log(filters);
//3. за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let array=[10,8,-7,55,987,-1011,0,1050,0] ;
let stringovi =array.map(value => value+'');
console.log(stringovi);
//4. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
console.log(str.split(' '));
//5.Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let str1='hello world';
let str2='lorem ipsum';
let str3='javascript is cool'
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
//6.Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());
//7. Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());
//8. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str4 = ' dirty string   ';
let st1=str4.trim();
console.log(st1)
//2 варіант
// let st=str4.replace(' ', '').replace('   ','');

//9.створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//sortNums(nums,'descending') // [21,11,3]

let mas = [21,11,3];
function sortNums(nums) {
for(let i=0,tmp;i<nums.length-1;i++) {
    for (let j = 0; j < nums.length-1; j++) {
        if (nums[j] < nums[j + 1]) {
            tmp = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = tmp;
        }
    }
}
    console.log(nums)
}
sortNums(mas);
function sortNums2(nums, rt) {
    for(let i=0,tmp;i<nums.length-1;i++) {
        for (let j = 0; j < nums.length-1; j++) {
            if (nums[j] > nums[j + 1]) {
                tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
    }
    console.log(nums)
}
sortNums2(mas);
//10.Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let strr = "HTML JavaScript PHP";
let insert_dash=(str)=>console.log(strr.replaceAll(' ', '-').toUpperCase());
insert_dash(strr);
//11.Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let string = "Сила тяжести приложена к центру масс тела";
let cutString=(str,n)=> {
    let splits = str.split(' ', n);
    let strin= splits.toString().replaceAll(',',' ');
    return strin
}
document.write(cutString(string,5));
