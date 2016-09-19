var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  //remember we have to set the prototype's constructor so that it's referencing the HoneyMakerBee
  //though it inherits everything from Bee, which technically is Grub..
  HoneyMakerBee.prototype.constructor = HoneyMakerBee;
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.makeHoney = function() {
  return this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  return this.honeyPot--;
};

