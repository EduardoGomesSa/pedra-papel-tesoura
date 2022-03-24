//Placar
var vitoria = 0;
var empate = 0;
var derrota = 0;
var total = 0;
function jogar(r){
    //variável da escolha do jogador
    var player = parseInt(r)
    //Variáveis do nome e imagem do jogador 1
    var i1 = document.getElementById('jog')
    var j1 = document.getElementById('jog1')
    //Variável da imagem do adversário
    var i2 = document.getElementById('img')
    //Determinação da jogada do adversário
    var min = Math.ceil(1);
    var max = Math.floor(4);
    var p2 = Math.floor(Math.random() * (max - min)) + min;
    //Jogada pedra
    if(player==1){
        if((player==1)&&(p2==3)){
            i1.src = 'img/pedra.png'
            j1.innerText = 'Pedra'
            document.getElementById('img').src = 'img/tesoura.png';
            document.getElementById('adv').innerText = 'Tesoura';
            document.getElementById('res').innerText = 'Vc venceu!'
            updateVitoria(++vitoria)
            
        }else if((player==1)&&(p2==2)){
            i1.src = 'img/pedra.png'
            j1.innerText = 'Pedra'
            i2.src = 'img/papel.png'
            document.getElementById('adv').innerText = 'Papel';
            document.getElementById('res').innerText = 'Vc perdeu!'
            updateDerrota(++derrota)
        }else{
            i1.src = 'img/pedra.png'
            j1.innerText = 'Pedra'
            i2.src = 'img/pedra.png'
            document.getElementById('adv').innerText = 'Pedra';
            document.getElementById('res').innerText = 'Empate!'
            updateEmpate(++empate)
        }
    }
    //Jogada papel
    else if(player==2){
        if((player==2)&&(p2==1)){
            i1.src = 'img/papel.png'
            j1.innerText = 'Papel'
            i2.src = 'img/pedra.png'
            document.getElementById('adv').innerText = 'Pedra';
            document.getElementById('res').innerText = 'Vc venceu!'
            updateVitoria(++vitoria)
        }else if((player==2)&&(p2==3)){
            i1.src = 'img/papel.png'
            j1.innerText = 'Papel'
            i2.src = 'img/tesoura.png'
            document.getElementById('adv').innerText = 'Tesoura';
            document.getElementById('res').innerText = 'Vc Perdeu!'
            updateDerrota(++derrota)
        }else{
            i1.src = 'img/papel.png'
            j1.innerText = 'Papel'
            i2.src = 'img/papel.png'
            document.getElementById('adv').innerText = 'Papel';
            document.getElementById('res').innerText = 'Empate!'
            updateEmpate(++empate)
        }
    }
    //Jogada tesoura
    else{
        if((player==3)&&(p2==2)){
            i1.src = 'img/tesoura.png'
            j1.innerText = 'Tesoura'
            i2.src = 'img/papel.png'
            document.getElementById('adv').innerText = 'Papel';
            document.getElementById('res').innerText = 'Vc venceu!'
            updateVitoria(++vitoria)
        }else if((player==3)&&(p2==1)){
            i1.src = 'img/tesoura.png'
            j1.innerText = 'Tesoura'
            i2.src = 'img/pedra.png'
            document.getElementById('adv').innerText = 'Pedra';
            document.getElementById('res').innerText = 'Vc perdeu!'
            updateDerrota(++derrota)
        }else{
            i1.src = 'img/tesoura.png'
            j1.innerText = 'Tesoura'
            i2.src = 'img/tesoura.png'
            document.getElementById('adv').innerText = 'Tesoura';
            document.getElementById('res').innerText = 'Empate!'
            updateEmpate(++empate)
        }
    }
    //alterando o total de partidas jogadas
		updateTotal(++total);
		

}
// Função da quantidade total de partidas
function updateTotal(r){
    document.getElementById("t").innerHTML = r;
}
// Função da quantidade total de vitorias
function updateVitoria(r){
    document.getElementById("v").innerHTML = r;
}
// Função da quantidade total de empates
function updateEmpate(r){
    document.getElementById("e").innerHTML = r;
}
// Função da quantidade total de Derrotas
function updateDerrota(r){
    document.getElementById("d").innerHTML = r;
}