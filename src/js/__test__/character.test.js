import Bowerman from '../Bowerman';

test('Проверка работы метода levelUp', () => {
  const person = new Bowerman();
  person.levelUp();
  expect(person).toEqual({ attackDefense: '30/30', health: 100, level: 2 });
});

test('Повышение уровня в случае нулевого количества жизней', () => {
  expect(() => {
    const person = new Bowerman();
    person.health = 0;
    person.levelUp();
  }).toThrow(Error);
});

test('Проверка двойного получения уровня', () => {
  const person = new Bowerman();
  person.levelUp();
  person.levelUp();
  expect(person).toEqual({ attackDefense: '36/36', health: 100, level: 3 });
});
