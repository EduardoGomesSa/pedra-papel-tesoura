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
    //Placar
    var vitorias = document.getElementById('v');
    var empates = parseInt(document.getElementById('e'));
    var derrotas = parseInt(document.getElementById('d'));
    var placar = 0
    //Jogada pedra
    if(player==1){
        if((player==1)&&(p2==3)){
            i1.src = 'img/pedra.png'
            j1.innerText = 'Pedra'
            document.getElementById('img').src = 'img/tesoura.png';
            document.getElementById('adv').innerText = 'Tesoura';
            document.getElementById('res').innerText = 'Vc venceu!'
            
        }else if((player==1)&&(p2==2)){
            i1.src = 'img/pedra.png'
            j1.innerText = 'Pedra'
            i2.src = 'img/papel.png'
            document.getElementById('adv').innerText = 'Papel';
            document.getElementById('res').innerText = 'Vc perdeu!'
        }else{
            i1.src = 'img/pedra.png'
            j1.innerText = 'Pedra'
            i2.src = 'img/pedra.png'
            document.getElementById('adv').innerText = 'Pedra';
            document.getElementById('res').innerText = 'Empate!'
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
        }else if((player==2)&&(p2==3)){
            i1.src = 'img/papel.png'
            j1.innerText = 'Papel'
            i2.src = 'img/tesoura.png'
            document.getElementById('adv').innerText = 'Tesoura';
            document.getElementById('res').innerText = 'Vc Perdeu!'
        }else{
            i1.src = 'img/papel.png'
            j1.innerText = 'Papel'
            i2.src = 'img/papel.png'
            document.getElementById('adv').innerText = 'Papel';
            document.getElementById('res').innerText = 'Empate!'
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
        }else if((player==3)&&(p2==1)){
            i1.src = 'img/tesoura.png'
            j1.innerText = 'Tesoura'
            i2.src = 'img/pedra.png'
            document.getElementById('adv').innerText = 'Pedra';
            document.getElementById('res').innerText = 'Vc perdeu!'
        }else{
            i1.src = 'img/tesoura.png'
            j1.innerText = 'Tesoura'
            i2.src = 'img/tesoura.png'
            document.getElementById('adv').innerText = 'Tesoura';
            document.getElementById('res').innerText = 'Empate!'
        }
    }
    //alterando o placar
    if(document.getElementById('res').innerText == 'Vc venceu!'){
        placar +=1
        vitorias.innerText = placar
        //document.write(typeof(placar))
        //document.write(placar)
    }
}