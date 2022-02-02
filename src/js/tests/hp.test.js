import checkHp from "../hp";

test.each([
  [{name: 'мечник', health: 10}, "critical"],
  [{name: 'маг', health: 100}, "healthy"],
  [{name: 'лучник', health: 35}, "wounded"],
])("health indication test",
  (player, expected) => {
    const result = checkHp(player);
    expect(result).toBe(expected);
  });