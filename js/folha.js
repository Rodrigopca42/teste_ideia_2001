 
 //CARROSSEL DE IMAGENS NA PÁGINA DE EVENTOS
 const imagem = document.getElementById('img')
 const img =  document.querySelectorAll('#img img')

 let car_img = 0

 function carrossel(){
     car_img++

     if (car_img > img.length - 1){
         car_img = 0
     }

     imagem.style.transform = `translateX(${-car_img * 100}%)`

 }

 setInterval (carrossel, 2500)


 //GRÁFICO DA PASTA RELATÓRIO
const rg = document.getElementById('meu_grafico').getContext("2d")

const labels =[
    '1º semana',
    '2º semana',
    '3º semana',
    '4º semana',
    '5º semana',
    '6º semana',
    '7º semana',
    '8º semana',
    '8º semana',
    '10º semana'
]

const data = {
    labels,
    datasets: [{
        data: [10,25,35,40,60,65,75,90,95,100 ],
        label: "Progressão do projeto Ideia2022",
        fill:true
    }]
}

const config = {
    type:'line',
    data,
    options: {
        responsive: true,
        radius: 4,
        hoverRadius: 7
    }
}

const myChart = new Chart(rg, config)