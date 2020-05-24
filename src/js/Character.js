export default class Character {
  constructor() {
    this.attackDefense = null;
    this.level = 1;
    this.health = 100;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attackDefense = this.attackDefense.split('/');
      this.attackDefense.forEach(function (elem, index) {
        this[index] = parseInt(elem, 0) + (elem * (20 / 100));
      }, this.attackDefense);
      this.attackDefense = this.attackDefense.join('/');
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }
}
