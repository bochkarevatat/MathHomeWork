import Daemon from '../Daemon';

test('return correct value mainAttack', () => {
  const testDaemon = new Daemon('DaemonName');
  testDaemon.mainAttack = 40;
  testDaemon.distance = 3;
  expect(testDaemon.attack).toBe(32);
});

test('return correct value mainAttack, if stoned - true', () => {
  const result = new Daemon('DaemonName');
  result.mainAttack = 40;
  result.distance = 3;
  result.stonedReal = true;
  expect(result.attack).toBe(20);
});

test('return correct value mainAttack, if stoned - false', () => {
  const testDaemon = new Daemon('DaemonName');
  testDaemon.mainAttack = 40;
  testDaemon.distance = 3;
  testDaemon.stoned = false;
  expect(testDaemon.attack).toBe(32);
});
test('return correct value mainAttack, if attackStrength < 0', () => {
  const testDaemon = new Daemon('DaemonName');
  testDaemon.mainAttack = -3;
  testDaemon.stoned = true;
  expect(testDaemon.attack).toBe(0);
});
test('return correct value mainAttack, if distance=0', () => {
  const testDaemon = new Daemon('DaemonName');
  testDaemon.mainAttack = 40;
  testDaemon.distance = -1;
  testDaemon.stoned = true;
  expect(testDaemon.attack).toBe(40);
});