import Character from '../Character';
import Daemon from '../Daemon';

test('return correct value mainAttack', () => {
    const testDaemon = new Daemon('DaemonName');
    const expected = {
        name: 'DaemonName',
        type: 'Daemon',
        health: 100,
        level: 1,
        mainAttack: 10,
        defence: 40,
        stonedReal: false,
        distance: 1,
    }
    expect(testDaemon).toEqual(expected);
  });

  test('should throw error if the name of the object is not a string', () => {
    const expected =
      'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов!';
    expect(() => new Character(22, 'Daemon')).toThrowError(expected);
  });

  test('should throw error if the no name ', () => {
    const expected =
      'Ошибка! Такого героя нет!';
    expect(() => new Character('Durak')).toThrowError(expected);
  });