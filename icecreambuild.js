function Hello(){
    let date = new Date();
    let hours = date.getHours();
    if(hours >= 6 && hours <= 12){
        alert('Bom dia! Seja bem vindo ao momento mais gostoso!')
    }else if(hours >= 13 && hours <= 18){
        alert('Boa tarde! Seja bem vindo ao momento mais gostoso!')
    }else{
        alert('Boa noite! Seja bem vindo ao momento mais gostoso!')
    }
    const name = prompt('Qual o seu nome?') || "Visitante";
    document.getElementById('visit').innerHTML = `Olá, <span>${name}</span>! Se delicie com as nossas combinações! `;
}
//Quantidade de bolas
const oneBall = document.getElementById('oneBall');
const twoBall = document.getElementById('twoBall');
let imgSecondBall = document.getElementById('imgSecondBall');
let imgFirstBall = document.getElementById('imgFirstBall');
const secondChoice = document.getElementById('second-choice');

oneBall.addEventListener('change', fieldChange = () =>{
    if(document.getElementById('oneBall').checked){
        secondChoice.style.opacity = "0"
        imgFirstBall.src = "assets/imgs/bola1-ref.png"
        imgSecondBall.src = "assets/imgs/bola2-displayNone.png"
    }
})
twoBall.addEventListener('change', fieldChange2 = () =>{
    secondChoice.style.opacity = "1"
    imgSecondBall.src = "assets/imgs/bola2-ref.png"
})

//Alteração de sabor
const caja = document.getElementById('caja')
const graviola = document.getElementById('graviola')
const goiaba = document.getElementById('goiaba')
const maracuja = document.getElementById('maracuja')
const acai = document.getElementById('acai')
const morango = document.getElementById('morango')
const chocolate = document.getElementById('chocolate')
const chocolateB = document.getElementById('chocolateb')
const menta = document.getElementById('menta')
const caramelo = document.getElementById('caramelo')

caja.addEventListener('change', changeToCaja = () =>{
    imgFirstBall.src = "assets/imgs/bola1-caja.png"
})
graviola.addEventListener('change', changeToGraviola = () =>{
    imgFirstBall.src = "assets/imgs/bola1-graviola.png"
})
goiaba.addEventListener('change', changeToGoiaba = () =>{
    imgFirstBall.src = "assets/imgs/bola1-goiaba.png"
})
maracuja.addEventListener('change', changeToMaracuja = () =>{
    imgFirstBall.src = "assets/imgs/bola1-maracuja.png"
})
acai.addEventListener('change', changeToAcai = () =>{
    imgFirstBall.src = "assets/imgs/bola1-acai.png"
})
morango.addEventListener('change', changeToMorango = () =>{
    imgFirstBall.src = "assets/imgs/bola1-morango.png"
})
chocolate.addEventListener('change', changeToChocolate = () =>{
    imgFirstBall.src = "assets/imgs/bola1-chocolate.png"
})
chocolateB.addEventListener('change', changeToChocolateB = () =>{
    imgFirstBall.src = "assets/imgs/bola1-chocolateb.png"
})
menta.addEventListener('change', changeToMenta = () =>{
    imgFirstBall.src = "assets/imgs/bola1-menta.png"
})
caramelo.addEventListener('change', changeToCaramelo = () =>{
    imgFirstBall.src = "assets/imgs/bola1-caramelo.png"
})

const caja2 = document.getElementById('caja2')
const graviola2 = document.getElementById('graviola2')
const goiaba2 = document.getElementById('goiaba2')
const maracuja2 = document.getElementById('maracuja2')
const acai2 = document.getElementById('acai2')
const morango2 = document.getElementById('morango2')
const chocolate2 = document.getElementById('chocolate2')
const chocolateB2 = document.getElementById('chocolateb2')
const menta2 = document.getElementById('menta2')
const caramelo2 = document.getElementById('caramelo2')

caja2.addEventListener('change', changeToCaja2 = () =>{
    imgSecondBall.src = "assets/imgs/bola2-caja.png"
})
graviola2.addEventListener('change', changeToGraviola2 = () =>{
    imgSecondBall.src = "assets/imgs/bola2-graviola.png"
})
goiaba2.addEventListener('change', changeToGoiaba2 = () =>{
    imgSecondBall.src = "assets/imgs/bola2-goiaba.png"
})
maracuja2.addEventListener('change', changeToMaracuja2 = () =>{
    imgSecondBall.src = "assets/imgs/bola2-maracuja.png"
})
acai2.addEventListener('change', changeToAcai2 = () =>{
    imgSecondBall.src = "assets/imgs/bola2-acai.png"
})
morango2.addEventListener('change', changeToMorango2 = () =>{
    imgSecondBall.src = "assets/imgs/bola2-morango.png"
})
chocolate2.addEventListener('change', changeToChocolate2 = () =>{
    imgSecondBall.src = "assets/imgs/bola2-chocolate.png"
})
chocolateB2.addEventListener('change', changeToChocolateB2 = () =>{
    imgSecondBall.src = "assets/imgs/bola2-chocolateb.png"
})
menta2.addEventListener('change', changeToMenta2 = () =>{
    imgSecondBall.src = "assets/imgs/bola2-menta.png"
})
caramelo2.addEventListener('change', changeToCaramelo2 = () =>{
    imgSecondBall.src = "assets/imgs/bola2-caramelo.png"
})