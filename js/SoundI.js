var Sound = Class.create({
  initialize: function (sound_path) {
    this.sound = new Audio (sound_path);
    this.sound.loop = true;
    this.sound.volume = 0.0;
  },
  play: function() {
    this.sound.play ();
  },
  set_volume: function (vol) {
    this.sound.volume = vol;
  },
  get_volume: function () {
    return this.sound.volume;
  },
  stop: function () {
    this.sound.pause ();
  }
});
