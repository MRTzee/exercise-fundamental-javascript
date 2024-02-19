function getRandomItem() {
  return {
    // Properti health akan memiliki nilai 10 jika hasil dari Math.random() kurang dari 0.5, atau 0 jika tidak.
    health: Math.random() < 0.5 ? 10 : 0,
    power: Math.random() < 0.5 ? 10 : 0,
  };
}
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(getRandomItem());
console.log(getRandomItem());
console.log(getRandomItem());
console.log(getRandomItem());
console.log(getRandomItem());
console.log(getRandomItem());

function useItem(item) {
  health += item.health;
  power += item.power;
  return {
    health,
    power,
  };
}

// Get random items for each player
let health = 100;
let power = 100;
const HealthDanPowerPlayer1 = getRandomItem();
const HealthDanPowerPlayer2 = getRandomItem();
const player1 = useItem(HealthDanPowerPlayer1);
const player2 = useItem(HealthDanPowerPlayer2);
console.log(player1);
console.log(player2);
