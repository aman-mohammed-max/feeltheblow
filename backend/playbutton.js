import { audio_src } from '../assets/audio/js/audio_link' ;
import Sound from "react-native-sound";


const birds = new Sound(audio_src.birds);
const boat = new Sound(audio_src.boat);
const city = new Sound(audio_src.city);
const coffeeshop = new Sound(audio_src.coffeeshop);
const fireplace = new Sound(audio_src.fireplace);
const pinknoise = new Sound(audio_src.pinknoise);
const rain = new Sound(audio_src.rain);
const storm = new Sound(audio_src.storm);
const stream = new Sound(audio_src.stream);
const summernight = new Sound(audio_src.summernight);
const train = new Sound(audio_src.train);
const waves = new Sound(audio_src.waves);
const whitenoise = new Sound(audio_src.whitenoise);
const wind = new Sound(audio_src.wind);

const all_sound = birds + boat + city + coffeeshop + fireplace + pinknoise + rain + storm + stream + summernight + train + waves + whitenoise + wind;

export function play () {
    birds.play();
    // boat.play();
    // city.play();
    // coffeeshop.play();
    // fireplace.play();
    // pinknoise.play();
    rain.play();
    storm.play();
    stream.play();
    // summernight.play();
    // train.play();
    waves.play();
    // whitenoise.play();
    wind.play();
    console.log('played');
}


console.log('loops: ' + rain.getNumberOfLoops());

// Stop the sound and rewind to the beginning
storm.setNumberOfLoops(7);
storm.stop(() => {
    storm.play();
});


export function ra (ra) {
    rain.setVolume(ra);
    console.info( 'vol rain ' + ra)
}

export function sto (sto) {
    storm.setVolume(sto);
    console.info( 'vol storm ' + sto)
}

export function win (win) {
    wind.setVolume(win);
    console.info( 'vol wind ' + win)
}

export function was (was) {
    waves.setVolume(was);
    console.info( 'vol waves ' + was)
}

export function str (str) {
    stream.setVolume(str);
    console.info( 'vol stream ' + str)
}

export function bir (bir) {
    birds.setVolume(bir);
    console.info( 'vol birds ' + bir)
}

//  export function ra (ra) {
//     waves.setVolume(ra);
//     console.info( 'vol waves ' + ra)
// }


