import Tuna from "tunajs";

export class Track {
  id = null;
  updated = null;
  effects = [];
  tuna = null;
  audioPath = null;
  audioContext = null;
  source = null;
  gain = null;

  constructor(audioPath, audioContext, source) {
    console.log("construct", audioPath, audioContext, source);
    this.id = audioPath; // zatsu
    this.audioPath = audioPath;
    this.audioContext = audioContext;
    this.source = source;

    this.tuna = new Tuna(this.audioContext);
    this.gain = new this.tuna.Gain({ gain: 1, bypass: false });
    this.effects.push(new this.tuna.Panner({ pan: 0, bypass: true }));
    this.effects.push(
      new this.tuna.Overdrive({
        algorithmIndex: 2,
        outputGain: -12,
        bypass: true
      })
    );
    this.effects.push(new this.tuna.Delay({ delayTime: 1000, bypass: true }));
    this.effects.push(this.gain);

    let beforeNode = this.source;
    this.effects.forEach(effect => {
      beforeNode.connect(effect);
      beforeNode = effect;
    });
    this.gain.connect(this.audioContext.destination);

  }

  static async init(audioPath) {
    console.log("init Track", audioPath);
    const audioContext = new AudioContext();
    const response = await fetch(audioPath);
    const data = await response.arrayBuffer();
    const source = audioContext.createBufferSource();
    source.loop = true;
    source.buffer = await audioContext.decodeAudioData(data);
    return new Track(audioPath, audioContext, source);
  }

  play() {
    console.log("start Track.js");
    this.source.start();
  }

  stop() {
    this.source.stop();
  }

  toggleMute() {}

  toggleEffect() {}

  pan() {}

  volume() {
    return this.gain["gain"].value;
  }
  setVolume(vol) {
    console.log("setVol before", this.gain["gain"].value);
    this.gain["gain"].value = vol;
    console.log("setVol after", this.gain["gain"].value);
  }

  icon() {
    return this.audioPath.split(".")[0] + ".png";
  }

  toString() {
    return this.audioPath;
  }
}
