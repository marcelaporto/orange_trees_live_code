describe("an orange tree", function() {
  var tree;

  beforeEach(function() {
    tree = new OrangeTree();
  });

  it("has an age", function () {
    expect(tree.age).toBe(0);
  });

  it("has a height", function () {
    expect(tree.height).toBe(0);

  });
  it("has a collection of oranges", function () {
    expect(tree.oranges).toEqual(jasmine.arrayContaining([]));
  });

  describe("reporting whether it's mature", function() {
    it("is mature if it has reached fruit-bearing age", function () {
      var matureTree = new OrangeTree({age: 6})

      expect(matureTree.isMature()).toBe(true);
    });
    it("is not mature if it has not reached fruit-bearing age", function () {
      var immatureTree = new OrangeTree({age: 3})

      expect(immatureTree.isMature()).toBe(false);

    });
  });

  describe("reporting whether it's dead", function() {
    it("is dead if it's reached the maximum age for an orange tree", function () {
      var deadTree = new OrangeTree({age: 100})

      expect(deadTree.isDead()).toBe(true);

    });
    it("is not dead if it's not reached the maximum age for an orange tree", function() {
      var aliveTree = new OrangeTree({age: 57})

      expect(aliveTree.isDead()).toBe(false);
    });
  });

  describe("reporting whether it has oranges", function() {
    it("has oranges if it's collection of oranges is not empty", function() {
      var orangeHavingTree = new OrangeTree({oranges: [new Orange()]})

      expect(orangeHavingTree.hasOranges()).toBe(true);
    });
    it("has no oranges if it's collection of oranges is empty", function() {
      var emptyTree = new OrangeTree({oranges: []})

      expect(emptyTree.hasOranges()).toBe(false);
    });
  });

  describe("passing a growing season", function() {
    describe("when it's alive", function() {
      it("gets older", function() {
        var youngTree = new OrangeTree({age: 3})
        youngTree.passGrowingSeason()
        expect(youngTree.age).toBe(4);
      });

      describe("when the tree is shorter than the maximum height for an orange tree", function() {
        it("grows taller", function () {
          var shortTree = new OrangeTree({height: 10})
          shortTree.passGrowingSeason()
          expect(shortTree.height).toBe(12.5);
        });
      });

      describe("when the tree has reached the maximum height for an orange tree", function() {
        it("does not grow", function () {
          var tallTree = new OrangeTree({height: 25})
          tallTree.passGrowingSeason()
          expect(tallTree.height).toBe(25);
        });
      });

      describe("when it's mature", function() {
        it("produces oranges", function() {
          var matureTree = new OrangeTree({age: 6, oranges: []})
          matureTree.passGrowingSeason()
          expect(matureTree.hasOranges()).toBe(true);

        });
      });

      describe("when it's not mature", function() {
        it("does not produce fruit", function() {
          var immatureTree = new OrangeTree({age: 3, oranges: []})
          immatureTree.passGrowingSeason()
          expect(immatureTree.hasOranges()).toBe(false);

        });
      });
    });

    describe("when it's dead", function() {
      var deadTree;

      beforeEach(function() {
        deadTree = new OrangeTree({age: 100, height: 20, oranges: []})
        deadTree.passGrowingSeason()
      });

      it("does not get older", function () {
        expect(deadTree.age).toBe(100);
      });
      it("does not grow", function () {
        expect(deadTree.height).toBe(20);
      });
      it("does not produce fruit", function(){
        expect(deadTree.hasOranges()).toBe(false);

      });
    });
  });

  describe("picking an orange", function() {
    describe("when the tree has oranges", function() {

      var treeWithOranges;
      var orange;

      beforeEach(function() {
        orange = new Orange()
        treeWithOranges = new OrangeTree({oranges: [orange]})
      });

      it("returns one of its oranges", function() {
        expect(treeWithOranges.pickAnOrange()).toBe(orange);
      });
      it("no longer has the returned orange in its collection of oranges", function() {
        treeWithOranges.pickAnOrange()
        expect(treeWithOranges.oranges).not.toEqual(jasmine.arrayContaining([orange]));
      });
    });

    describe("when the tree has no oranges", function() {
      it("returns undefined", function(){
        var emptyTree = new OrangeTree({oranges: []})
        expect(emptyTree.pickAnOrange()).toBe(undefined)

      });
    });
  });
});
