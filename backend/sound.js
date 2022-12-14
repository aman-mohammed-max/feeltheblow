import { audio_src } from '../assets/audio/js/audio_link';
import Sound from "react-native-sound";


export const birds = new Sound(audio_src.birds);
export const boat = new Sound(audio_src.boat);
export const city = new Sound(audio_src.city);
export const coffeeshop = new Sound(audio_src.coffeeshop);
export const fireplace = new Sound(audio_src.fireplace);
export const pinknoise = new Sound(audio_src.pinknoise);
export const rain = new Sound(audio_src.rain);
export const storm = new Sound(audio_src.storm);
export const stream = new Sound(audio_src.stream);
export const summernight = new Sound(audio_src.summernight);
export const train = new Sound(audio_src.train);
export const waves = new Sound(audio_src.waves);
export const whitenoise = new Sound(audio_src.whitenoise);
export const wind = new Sound(audio_src.wind);

const all_sound = birds + boat + city + coffeeshop + fireplace + pinknoise + rain + storm + stream + summernight + train + waves + whitenoise + wind;

export function play () {
    birds.setNumberOfLoops(-1).play();
    boat.setNumberOfLoops(-1).play();
    city.setNumberOfLoops(-1).play();
    coffeeshop.setNumberOfLoops(-1).play();
    fireplace.setNumberOfLoops(-1).play();
    pinknoise.setNumberOfLoops(-1).play();
    rain.setNumberOfLoops(-1).play();
    storm.setNumberOfLoops(-1).play();
    stream.setNumberOfLoops(-1).play();
    summernight.setNumberOfLoops(-1).play();
    train.setNumberOfLoops(-2).play();
    waves.setNumberOfLoops(-1).play();
    whitenoise.setNumberOfLoops(-1).play();
    wind.setNumberOfLoops(-1).play();
    console.log('played');
    setvolm();
}

export function pause () {
    birds.pause();
    boat.pause();
    city.pause();
    coffeeshop.pause();
    fireplace.pause();
    pinknoise.pause();
    rain.pause();
    storm.pause();
    stream.pause();
    summernight.pause();
    train.pause();
    waves.pause();
    whitenoise.pause();
    wind.pause();
    console.log('paused');
}


function setvolm () {
    birds.setVolume(0);
    boat.setVolume(0);
    city.setVolume(0);
    coffeeshop.setVolume(0);
    fireplace.setVolume(0);
    pinknoise.setVolume(0);
    rain.setVolume(0);
    storm.setVolume(0);
    stream.setVolume(0);
    summernight.setVolume(0);
    train.setVolume(0);
    waves.setVolume(0);
    whitenoise.setVolume(0);
    wind.setVolume(0);
    console.log('volm set to what is sound');
}

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

export function summ (summ) {
    summernight.setVolume(summ);
    console.info( 'vol summernight ' + summ)
}

export function tra (tra) {
    train.setVolume(tra);
    console.info( 'vol train ' + tra)
}

export function boa (boa) {
    boat.setVolume(boa);
    console.info( 'vol boat ' + boa)
}

export function cit (cit) {
    city.setVolume(cit);
    console.info( 'vol city ' + cit)
}

export function coff (coff) {
    coffeeshop.setVolume(coff);
    console.info( 'vol coffeeshop ' + coff)
}

export function fire (fire) {
    fireplace.setVolume(fire);
    console.info( 'vol fireplace ' + fire)
}

export function pink (pink) {
    pinknoise.setVolume(pink);
    console.info( 'vol pinknoise ' + pink)
}

export function whit (whit) {
    whitenoise.setVolume(whit);
    console.info( 'vol whitenoise ' + whit)
}

