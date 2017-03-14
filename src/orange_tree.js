var OrangeTree = function(args = {}) {
  this.age = args.age || 0;
  this.height = args.height || 0;
  this.oranges = args.oranges || [];
}

OrangeTree.prototype.isMature = function () {
  return this.age >= 5;
}

OrangeTree.prototype.isDead = function () {
  return this.age >= 100;
}

OrangeTree.prototype.hasOranges = function () {
  return this.oranges.length > 0;
}

OrangeTree.prototype.pickAnOrange = function(){
  return this.oranges.pop()
}

OrangeTree.prototype.passGrowingSeason = function () {
  if(!this.isDead()) {
    this.age += 1

    if(this.height <= 22.5) {
      this.height += 2.5
    }
  
    if(this.isMature()) {
      for (var i = 0; i < 10; i++) {
        this.oranges += new Orange()
      }
    }
  }
}
