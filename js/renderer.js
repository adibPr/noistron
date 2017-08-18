// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function prepare_sound (sound_dom) {
  sound_name = sound_dom.attributes['data-id'].value;
  // create object of sound
  var this_sound = new Sound ('../sound/' + sound_name + '.mp3');

  // add event
  sound_dom.querySelector ('.play').addEventListener ('click', ()=> this_sound.play ());
  sound_dom.querySelector ('.stop').addEventListener ('click', ()=> this_sound.stop ());

  // create slider
  var slider = sound_dom.querySelector ('.slider');
  noUiSlider.create (slider, {
    start : this_sound.get_volume () * 100,
    range : {
      'min' : 0,
      'max' : 100
    },
    connect: true
  });


  // set event
  slider.noUiSlider.on ('change', function (values, handle) {
    this_sound.play (); // change means play
    this_sound.set_volume (values / 100);
  });

}

var sound_div = document.querySelectorAll ('.sound');
for (i=0; i<sound_div.length; i++) {
  var sound_dom = sound_div[i];
  prepare_sound (sound_dom);
}
