let btn = document.querySelector("#btn");

const random = ()=>{
    return Math.floor(Math.random()*99)+1 
};

const number = (num)=>{
    return num < 10 ? "0" + num: "" + num
};

const click = ()=>{
    const chislo = document.querySelector("#numbers");
    chislo.innerHTML = ""

    for(i=0; i<6; i++ ){
        const randomNum = random()
        const col = number(randomNum)
        const circle = document.createElement ("div")
        circle.classList.add("circle")
        circle.textContent = col 
        chislo.append(circle)
    }
}
click()
btn.addEventListener("click" , click)