function rpsls(pl1,pl2){
    let p1 = pl1.toLowerCase()
    let p2 = pl2.toLowerCase()
    
    if ((p1 == 'scissors' && p2 == 'paper') 
    || (p1 == 'paper' && p2 =='rock') 
    || (p1 == 'rock' && p2 == 'lizard') 
    || (p1 == 'lizard' && p2 == 'spock') 
    || (p1 == 'spock' && p2 == 'scissors') 
    || (p1 == 'scissors' && p2 == 'lizard') 
    || (p1 == 'lizard' && p2 == 'paper') 
    || (p1 == 'paper' && p2 == 'spock') 
    || (p1 == 'spock' && p2 == 'rock') 
    || (p1 == 'rock' && p2 == 'scissors')) {
        
      return 'Player 1 Won!'

    } else if (p1 == p2) {

      return 'Draw!'

    } else {

      return 'Player 2 Won!'

    }

}