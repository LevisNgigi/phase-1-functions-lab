function distanceFromHqInBlocks(blocks) {
    //returns the number of blocks given a value
    return Math.abs(blocks - 42) ;
  }

function distanceFromHqInFeet(blocks) {
    distanceFromHqInBlocks(blocks);
    //returns the number of feet given a value
    return Math.abs(blocks - 42) * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    distanceFromHqInFeet(start);
    distanceFromHqInFeet(destination);
    //returns the number of feet given a value
    return Math.abs(destination - start) * 264;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500 ) {
      return 25;
    }
    else{
        return ('cannot travel that far');
    } 
  }