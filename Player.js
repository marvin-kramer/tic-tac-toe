class Player{
    player1 = {id: 'player1', winsId: 'winsPlayer1', name: 'Spieler 1', value: 'X', wins: 0};
    player2 = {id: 'player2', winsId: 'winsPlayer2', name: 'Spieler 2', value: 'O', wins: 0};
    lastStarter = this.player1
    currentPlayer = this.lastStarter
    winner = null
    draw = false
    numberOfGames = 0
    isPlayingWithBot = false;
    toggle(){
        if (this.currentPlayer === this.player1){
            this.currentPlayer = this.player2
        }else this.currentPlayer = this.player1
    }

    nextPlyer(){
        if (this.lastStarter === this.player1){
            this.currentPlayer = this.player2
            this.lastStarter = this.player2
        }else {
            this.currentPlayer = this.player1
            this.lastStarter = this.player1
        }
    }
}

function isPlayingWithBot(state){
    if (player.isPlayingWithBot !== state){
        player.isPlayingWithBot = state
        const btns = document.getElementsByClassName('linkBtn')
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.toggle('active')
        }
    }
}