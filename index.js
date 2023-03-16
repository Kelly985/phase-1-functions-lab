// Code your solution in this file!



function distanceFromHqInBlocks(street) {
  const hq = 42;
  const distance = Math.abs(street - hq);
  return distance;
}

function distanceFromHqInFeet(street) {
  const block = 264;
  const distance = distanceFromHqInBlocks(street) * block;
  return distance;
}

function distanceTravelledInFeet(start, end) {
  const block = 264;
  const distance = Math.abs(end - start) * block;
  return distance;
}

function calculatesFarePrice(start, end) {
  const distanceInFeet = distanceTravelledInFeet(start, end);
  let fare;

  if (distanceInFeet <= 400) {
    fare = 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    fare = (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    fare = 25;
  } else {
    fare = 'cannot travel that far';
  }

  return fare;
}

const farePrice = calculatesFarePrice(30, 42);
console.log (farePrice);