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