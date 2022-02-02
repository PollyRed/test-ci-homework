import sortPlayers from '../matchers';

test('matchers test', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'бард', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const income = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'бард', health: 80 },
  ];

  const result = sortPlayers(income);

  expect(result).toEqual(expected);
});
