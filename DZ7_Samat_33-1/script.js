//Задание 1
const chislo = [5,4,1,20,0,-4,-8,100,4,-74,-5,0,0,1,2,7];

// map
const mapPed = chislo.map(function(num){
    return num * 5
});
console.log(mapPed);

// filter
const filtered = chislo.filter(function(num){
    return num > 0
});
console.log(filtered);

// reduce (максимальное число)
const maxNum = chislo.reduce(function (num , num2){
    return num > num2 ? num : num2
});
console.log(maxNum);

// reduce (минимальное число)
const mainNum = chislo.reduce(function (num , num2){
    return num < num2 ? num : num2
});
console.log(mainNum);


//Задание 2
const capitalize = function (string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

const names = ["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"];

// // map: артем -> Артем.
const capitalizedNames = names.map(function(name){
return capitalize(name)
});
console.log(capitalizedNames);

// map: все имена написать на латинице (написать функцию транслитерации)
function transliterate(str) {
    const transliterationMap = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e',
        'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k',
        'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
        'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
        'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
        'э': 'e', 'ю': 'yu', 'я': 'ya', 'А': 'A', 'Б': 'B', 'В': 'V',
        'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z',
        'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
        'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
        'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sch',
        'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
    };
    return str.split('').map(char => transliterationMap[char] || char).join('');
}
const latinNames = names.map(transliterate);
console.log(latinNames);

// filter: вывести имена начинающиеся с буквы "А"
const aNames = names.filter (function(name){
    return name.toLowerCase().startsWith("а")
});
console.log(aNames);

// reduce: получить самое длинное имя
const longestName = names.reduce(function(longest , current){
    return longest.length > current.length ? longest : current
});
console.log(longestName);

// reduce: получить самое короткое имя
const shortestName = names.reduce(function(shortest , current){
    return shortest.length < current.length ? shortest : current
});
console.log(shortestName);
