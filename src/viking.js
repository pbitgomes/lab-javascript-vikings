// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {return `${this.name} has received ${damage} points of damage`}
        else {return `${this.name} has died in act of combat`}
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {return `A Saxon has received ${damage} points of damage`}
        else {return `A Saxon has died in combat`}
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }    
    selectRandomVikingSaxon() {
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        return [viking, saxon]
    }    
    
    attacks(attacker, defender) {
        let blow = defender.receiveDamage(attacker.strength);
        if(defender.health <= 0) {
            if(blow.includes("Saxon")) {this.saxonArmy.splice(this.saxonArmy.indexOf(defender), 1)}
            else {this.vikingArmy.splice(this.vikingArmy.indexOf(defender), 1)}
        }
        return blow
    }
    
    vikingAttack() {
        let [viking, saxon] = this.selectRandomVikingSaxon();
        return this.attacks(viking, saxon)
    }
    saxonAttack() {
        let [viking, saxon] = this.selectRandomVikingSaxon();
        return this.attacks(saxon, viking)        
    }
        
    showStatus() {
        if (this.saxonArmy.length === 0) {return `Vikings have won the war of the century!`}
        else if (this.vikingArmy.length === 0) {return `Saxons have fought for their lives and survived another day...`}
        else {return `Vikings and Saxons are still in the thick of battle.`}
    }
}
