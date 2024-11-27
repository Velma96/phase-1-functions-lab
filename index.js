// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    const headquarters = 42; 
    return Math.abs(blockNumber - headquarters);
    console.log(distanceFromHqInBlocks(43)); 
    console.log(distanceFromHqInBlocks(50)); 
    console.log(distanceFromHqInBlocks(34));
}

function distanceFromHqInFeet(blockNumber) {
    const feetPerBlock = 264; 
    const blocks = distanceFromHqInBlocks(blockNumber); 
    return (blocks * feetPerBlock); 
    console.log(distanceFromHqInFeet(43));
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; 
    const blocksTravelled = Math.abs(destination - start); 
    return blocksTravelled * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264; 
    const distanceTravelled = Math.abs(destination - start) * feetPerBlock; 
  
    if (distanceTravelled <= 400) {
      return 0; 
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
      const chargeableDistance = distanceTravelled - 400; 
      return chargeableDistance * 0.02; 
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }