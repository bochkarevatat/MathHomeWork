import Daemon from '../Daemon';

test('return correct value mainAttack', () => {
  const testDaemon = new Daemon('DaemonName');
  testDaemon.mainAttack = 40;
  testDaemon.distance = 3;
  expect(testDaemon.attack).toBe(32);
});

test('return correct value mainAttack, if stoned - true', () => {
  const testDaemon = new Daemon('DaemonName');
  testDaemon.mainAttack = 40;
  testDaemon.distance = 3;
  testDaemon.stoned = true;
  expect(testDaemon.attack).toBe(20);
});

test('return correct value mainAttack, if stoned - false', () => {
  const testDaemon = new Daemon('DaemonName');
  testDaemon.mainAttack = 40;
  testDaemon.distance = 3;
  testDaemon.stoned = false;
  expect(testDaemon.attack).toBe(32);
});