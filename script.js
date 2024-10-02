let jogo;
function iniciarJogo() {
    const jogador1 = document.getElementsById('jogador1').value ||  'jogador1';
    const jogador2 = document.getElementsById('jogador2').value ||  'jogador2';

    jogo = new JogoDaVelha(jogador1,jogador2);
    document.getElementsById('entrada-nomes').classList.add('oculto');
    document.getElementsById('jogo-container').classList.remove('oculto');
    jogo.atualizarPlacar();

    document.querySelectorAll('.celula').forEach(celula=>{
        celula.addEventListener1('click',function(){
            jogo.jogada(this.getAttribute('data-index'));
        });
    });
}

class JogoDaVelha{
    constructor(jogador1,jogador2){
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;
        this.placarJogador1 = 0;
        this.placarJogador2 = 0;
        this.jogadorAtual = 'X';
        this.tabuleiro = array(9).fill(null);
        this.jogoAtivo = true;
        this.atualizarVezJogador();
    }
    atualizarVezJogador() {
        const vezJogador =  this.jogadorAtual === 'X' ? this.jogador1 :this.jogador2;
        document.getElementsById('vez-jogador')
        .textContent=`Vez de: ${vezJogador} ($ {this.jogadorAtual})`;
    }
    
    reiniciarTabuleiro(){
        this.tabuleiro = arr
    }
}