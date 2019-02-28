




class GameObjects {
   constructor(att) {
  this.createdAt = att.createdAt;
  this.name = att.name;
  this.dimensions = att.dimensions;
}

destroy () {
  return `${this.name} was removed from the game.`;
 };
}; //GameObjects


class CharacterStats extends GameObjects{
    constructor(CharAtt) {
      super(CharAtt)
  this.healthPoints = CharAtt.healthPoints;
};

takeDamage() {
  return `${this.name} took damage.`
 };
};//CharacterStats


class Humanoid extends CharacterStats {
    constructor(HumAtt) {
      super(HumAtt)
  this.team = HumAtt.team;
  this.weapons = HumAtt.weapons;
  this.language = HumAtt.language;
};


greet() {
  return `${this.name} offers a greeting in ${this.language}.`
 };
};//Humanoid










function Villain (VilAtt) {
  Humanoid.call(this, VilAtt);
}

Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.bat = function (opponent) {

  if (opponent.healthPoints <= 0) {
    return `${opponent.name} were KILLED by a bat `;
  } else 
    return `${opponent.name} have been hit by a bat `
};





function Hero (HeroAtt) {
  Humanoid.call(this, HeroAtt);
}
 
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.force = function (opp) {
  if (opp.healthPoints <= 0) {
    return `${opp.name} were KILLED by THE FORCE !!!`;
  } else 
    return `${opp.name} have been Hurt by THE FORCE by !!!`
};







  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });


  const badman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 5,
    },
    healthPoints: 15,
    name: 'BadMan',
    team: 'BadPeople',
    weapons: [
      'Knife',
      'Baseball bat',
    ],
    language: 'Evilish',
  });

  const goodman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 4,
      height: 4,
    },
    healthPoints: 15,
    name: 'GoodMan',
    team: 'GreatPeople',
    weapons: [
      'The Force',
      'Lightsaber',
    ],
    language: 'Pig Latin',
  });

 
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(Hero);
  console.log(Villain);
  console.log(Villain.prototype.bat(Hero));
  console.log(Hero.prototype.force(Villain));

