
// ------Errors------------

// 1.Sintaktik error => 
// 2.Reference error => 
// 3.Type error =>
// 4.EvalError
// 5.RangeError
// 6.InternalError => mustaqil organib olsanggiz boladi ?

// const obj = [{
//     name:"Asliddin",
//     age:19
// }]
// function myFunc()=>{
//     console.log("Hello");
// }


// 4.EvalError => Bu error hozirgi JavaScript versiyalarida qo’llanilmaydi. Lekin  funksiyasini noto’g’ri ishlatganda, SyntaxError yoki TypeError qa xatolar o’tkazilishi mumkin, oldin JS eski versionlarida functionda hatolik chiqganida EvalError qaytgan
// throw new EvalError("Hello this is Error")


// 6.RangeError => JavaScriptda bir qiymatning belgilangan chegaralardan tashqari bo’lgan bo’lishini ko’rsatadigan xato 
// function tekshir(x) {
//   if (!(x >= -500 && x <= 500)) {
//     throw new RangeError("-500 va 500 orasida emas")
//   }
// }
// tekshir(800)
// RangeError ishlatilish tartibi shunday yani oshib ketgan qiymatlar uchun ozimiz errorni elon qilib qoyishimiz kerak
// function loop(x){
//   if (x > 1000000000000) {
//     return;
//   }
//   loop(x + 1)
// }
// console.log(loop(0));

// ============== Try Catch =================
// const data = [{
//     name:"Asliddin"
// }]
// try{
//     data.map(item => console.log(item))
// }
// catch(err){
//     // let elPrompt = prompt(err)
//     // console.log(elPrompt);
//     const errName = err.toString().split(":")[0];
//     if(errName == "TypeError"){
//         alert("Sizda Type Error mavjud xatolikni oldini oling")
//     }
//     else if(errName == "ReferenceError"){
//         alert("Sizda Type Error mavjud xatolikni oldini oling")
//     }
// }
// finally{
//     console.log("Code finish");
// }



// =============== Regex (Regular Experssion) ===========
// Checking , sizni textingizda siz qidirgan malumot topilsa , mavjud bo'lsa , alohida arrayga solib qaytarilgan hollarda REGEX ishlatiladi 

// let regex = /Asliddin/gi //g => umumiy check qiladi , barcha oziga keraklilarini qabul qiladi // gi => umumiy check qiladi , barcha oziga keraklilarini qabul qiladi katta harf kichikina harfga qarab otirmidi 
// let elText = "salom asliddin , raxmat , Salom , hammasi yaxshi Asliddin salom Asliddin"
// test() , match() , replace(),

// console.log(regex.test(elText));
// console.log(elText.match(regex));
// console.log(elText.replace(regex, "Abdulaziz"));




// ============ SetTimeOut , SetInterVal ============= Asinxron function
// Sinxron => hech qanday vaqt kutmasdan joyida ishlaydi 
// Asinxron => malum bir vaqt kutib keyin ishlaydi 
// let elCard = document.querySelector(".card")
// setTimeout(() => {
//     elCard.className = "red"
// },2000)
// setTimeout(() => {
//     elCard.className = "yellow"
// },4000)
// const lastChangeColor = setTimeout(() => {
//     elCard.className = "green"
// },6000)

// elCard.addEventListener("click", function(){
//     console.log("Green off");
//     clearTimeout(lastChangeColor)
// })

// let elCounter = document.querySelector(".couter")
// let elStopCount = document.querySelector(".btn-stop")
// let count = 0
// const stopCoutFunc = setInterval(() => {
//     count++
//     elCounter.textContent = (count).toString().padStart(2, 0)
// },1000)

// elStopCount.addEventListener("click", () => {
//     elCounter.classList.toggle("salom")
//     if(elCounter.classList[1]){
//         clearInterval(stopCoutFunc)
//     }
//     else{
//         setInterval(() => {
//             count++
//             elCounter.textContent = (count).toString().padStart(2, 0)
//         },1000) 
//     }
// })



// let elCard1 = document.querySelector(".card1")
// let elCard2 = document.querySelector(".card2")
// let elCard3 = document.querySelector(".card3")

// function changeColors(){
//     setTimeout(() => {
//         elCard1.classList.add("red")
//         elCard2.classList.remove("yellow")
//         elCard3.classList.remove("green")
//     },1000)
//     setTimeout(() => {
//         elCard2.classList.add("yellow")
//         elCard1.classList.remove("red")
//         elCard3.classList.remove("green")
//     },3000)
//     setTimeout(() => {
//         elCard3.classList.add("green")
//         elCard1.classList.remove("red")
//         elCard2.classList.remove("yellow")
//     },5000)   
// }
// changeColors()
// const stopInterval = setInterval(() => {
//     console.log("Start change colors");
//     changeColors()
// },7000)

// elCard3.addEventListener("click", function(){
//     console.log("stop last interval");
//     clearInterval(stopInterval)
// })





let elCountryList = document.querySelector(".country")

function generateCountries(arr){
    arr.map(item => {
        let elItem = document.createElement("li")
        let elImg = document.createElement("img")
        let elTitle = document.createElement("h2")

        elItem.classList.add("country-item")
        elImg.src = item.img
        elImg.classList.add("country-img")
        elTitle.classList.add("country-title")
        elTitle.textContent = item.name

        elItem.append(elImg, elTitle)
        elCountryList.appendChild(elItem)

        elItem.addEventListener("click", function(){
            document.body.classList.toggle("mode")
        })        
    })
}
generateCountries(countries)