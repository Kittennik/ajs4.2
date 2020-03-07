import findBy from '../js/app';

test('Рабочий поиск', () => {
  const base = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const finder = findBy('name', 'маг');
  const expected = [
    {
      name: 'маг',
      type: 'character',
      description: 'Персонаж, обладающий магическими способностями',
    },
  ];
  expect(base.filter(finder)).toEqual(expected);
});

test('Ошибка в данных', () => {
  const base = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const finder = findBy('nama', 'миг');
  const expected = [];
  expect(base.filter(finder)).toEqual(expected);
});
