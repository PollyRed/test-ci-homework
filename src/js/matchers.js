function compare(a, b) {
  if (a.health < b.health) {
    return 1;
  }
  if (a.health > b.health) {
    return -1;
  }
  return 0;
}

export default function sortPlayers(players) {
  return players.sort(compare);
}
