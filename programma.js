

let foglio = document.getElementById('foglio');

let disegno = foglio.getContext('2d');

disegno.fillStyle = 'red'

disegno.fillRect(150,0, 400, 350)

disegno.fillStyle = 'black'

disegno.fillRect(0,350, 500, 10 )

disegno.fillStyle = 'black'

disegno.fillRect(150,0, 10, 500)

disegno.fillStyle = 'blue'

disegno.fillRect(0,360, 150, 150)

disegno.fillStyle = 'black'

disegno.fillRect(0,150, 150, 20)

disegno.fillStyle = 'black'

disegno.fillRect(440,360, 10, 150)

disegno.fillStyle = 'black'

disegno.fillRect(450,420, 50, 20)

disegno.fillStyle = 'yellow'



let corra = document.getElementById('corra');

let disegno2 = corra.getContext('2d');

corra.addEventListener('click', (evento)=> {
    disegno2.strokeRect( evento.offsetX, evento.offsetY, 500*Math.random(), 500*Math.random());
});
