import Math from './Math';

export default class Daemon extends Math {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}