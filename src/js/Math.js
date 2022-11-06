import Character from './Character';

export default class Math extends Character {

    constructor(name, type) {
        super(name, type);
        this.distance = 1;
        this.mainAttack = 0;
        this.stonedReal = false;
    }

    get stoned() {
        return this.stonedReal;
    }
    set stoned(value) {
        this.stonedReal = value
    }

    
    
    get attack() {
        
        if (this.distance > 1 && this.distance <= 5) {
            if (this.stoned) {
                return this.mainAttack * (1 - (0.1 * (this.distance - 1))) - Math.log2(this.distance) * 5;
            }
                return this.mainAttack * (1 - (0.1 * (this.distance - 1)));
                
            }
            if (this.mainAttack > 0) {
                return this.mainAttack;
              }
              return 0;
       
        
    }
        set attack(value) {
            this.mainAttack = value;
    
        }
    }
  