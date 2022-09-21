const getPositions = s => {
    const firstPerson = Math.trunc(s % 3);
    const secondPerson = Math.trunc((s / 3) % 3);
    const thirdPerson = Math.trunc((s / 9) % 3);
  
    return [firstPerson, secondPerson, thirdPerson];
  }