const cookies = () =>{
    confirm('Esta página utiliza-se de cookies para o seu funcionamento. Você esta de acordo em fornecer seus dados?')
}
const imgAnimateIcecream = document.getElementById('icecreamAnimate')

function buildIcecream(){
    imgAnimateIcecream.src = 'assets/imgs/casquinho-montado.jpeg'
}
function emptyIcecream(){
    imgAnimateIcecream.src = 'assets/imgs/casquinho-vazio.png'
}
imgAnimateIcecream.addEventListener('mouseover', buildIcecream )
imgAnimateIcecream.addEventListener('mouseout', emptyIcecream)


