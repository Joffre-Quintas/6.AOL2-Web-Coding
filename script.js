const imgAnimateIcecream = document.getElementById('icecreamAnimate')

function buildIcecream(){
    imgAnimateIcecream.src = 'assets/imgs/casquinho-montado.jpeg'
}
function emptyIcecream(){
    imgAnimateIcecream.src = 'assets/imgs/casquinho-vazio.png'
}
imgAnimateIcecream.addEventListener('mouseover', buildIcecream )
imgAnimateIcecream.addEventListener('mouseout', emptyIcecream)

   