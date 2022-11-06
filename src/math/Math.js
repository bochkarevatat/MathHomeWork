import Character from './Character';

export default class Math extends Character {

    constructor(name, type) {
        super(name, type);
        this.distance = 1;
        this.stonedReal = false;
    }

    get stoned() {
        return this.stonedReal;
    }
    set stoned(value) {
        this.stonedReal = value
    }

    
    
    get attack() {
        
        if (this.mainAttack > 0) {
            if (this.distance > 1) {
                this.mainAttack = this.mainAttack * (1 - (0.1 * (this.distance - 1)));
            }
        }
        if (this.stoned) {
            this.mainAttack = this.mainAttack - Math.log2(this.distance) * 5;
        }
        return this.mainAttack;
        
    }
        set attack(value) {
            this.mainAttack = value;
    
        }
    }
  