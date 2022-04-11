function defineSuit(card) {
    // good luck
    for (i = 0; i < card.length; i++) {
      if (card[i].includes('♣')) {
        return 'clubs'
      } else if (card[i].includes('♦')) {
        return 'diamonds'
      } else if (card[i].includes('♥')) {
        return 'hearts'
      } else if (card[i].includes('♠')) {
        return 'spades'
      }
    }
  }