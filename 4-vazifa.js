let user1 = prompt("Meva nomini kiriting");
let til = prompt("tilni tanlang rus - en");
let dictionary = {
    olma: {
        en: "apple",
        rus: "яблоко"
    },
    olcha: {
        en: "cherry",
        rus: "черешня",
    },
    qovun: {
        en: "melon",
        rus: "дыня",
    }
}
function tarjimon(meva, til){
    if (dictionary[meva] && dictionary[meva][til]){
        return dictionary[meva][til];
    }else {
        return "bu meva mavjud emas";
    }
}
let tarjimasi = tarjimon ( user1, til);
alert(tarjimasi);


