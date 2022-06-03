function robocuiDenie(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (robocuiDenie){
                resolve(1000)
            } else {
                reject('OPPPS')
            }
        },2000)
    })
}
function ituNaroboty(maneyAfterTicket,ticket){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (ticket <maneyAfterTicket){
            resolve(maneyAfterTicket-ticket)
        }else {
            reject('sudzhy doma')
        }},1000)

    })
}
function obid(maneyAfterTicket,obid){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(maneyAfterTicket>obid){
                resolve(maneyAfterTicket-obid)
            }else{
                reject('bydesh golodnyi')
            }
        },1500)
    })
}
function ituzNaroboty(zalusokAfterObid,ticket){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (ticket < zalusokAfterObid
            ){
                resolve(zalusokAfterObid-ticket)
            }else {
                reject('idy pishku')
            }},1000)

    })
}
function kypuvIstu(groshinaVechery,chekZmagazuny){
    return new Promise((resolve, reject)=>{
        if(groshinaVechery
            <chekZmagazuny
        ){
            reject('sudu golodnui')
        }else {resolve(groshinaVechery-chekZmagazuny)

        }
    },300)
}
robocuiDenie(true)
    .then((money)=>{
        console.log('denei pochavsaj polochuv grn',money)
        return ituNaroboty(money,20)
    })
    .then(zalushokMoney=>{
        console.log('reshta groseu',zalushokMoney)
        return obid(zalushokMoney,150)
    })
    .then(zalusokAfterObid=>{
        console.log('poiv smachno')
        return kypuvIstu(zalusokAfterObid,400)
    })
    .then(doma=>{
        console.log('zalushuv na byhlo',doma,'gruvniv')
    })
    .catch(rezalt=>{
        console.log('ooooooooooo')
    })

//   async function denie(){
//     try {
//   let money= await robocuiDenie(true);
//   console.log('denei pochavsaj polochuv grn',money);
//   let zalushokMoney=await ituNaroboty(money,50)
//   console.log('reshta groseu',zalushokMoney)
//   let zalusokAfterObid= await obid(zalushokMoney,150);
//   console.log('poiv smachno')
//   let groshinaVechery= await ituzNaroboty(zalusokAfterObid,20);
//   console.log('popav v magazun zalushok groshey',groshinaVechery)
//   let doma=await kypuvIstu(groshinaVechery,400);
//   console.log('zalushuv na byhlo',doma,'gruvniv')
//  } catch(e) {
//         console.warn('ooops',e)
//     }
// }
//
// denie();