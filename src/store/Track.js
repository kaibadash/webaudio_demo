import Tuna from "tunajs";

export class Track {
  effects = [];
  tuna = new Tuna(this.audioContext);
  audioPath = null;
  audioContext = null;
  source = null;

  constructor(audioPath, audioContext, source) {
    this.audioPath = audioPath;
    this.audioContext = audioContext;
    this.source = source;
    this.effects.push(new this.tuna.Gain({ gain: 1, bypass: false }));
    this.effects.push(new this.tuna.Panner({ pan: 0, bypass: true }));
    this.effects.push(
      new this.tuna.Overdrive({
        algorithmIndex: 2,
        outputGain: -12,
        bypass: true
      })
    );
    this.effects.push(new this.tuna.Delay({ delayTime: 1000, bypass: true }));
  }

  static async init(audioPath) {
    const audioContext = new AudioContext();
    const response = await fetch(audioPath);
    const data = await response.arrayBuffer();
    const source = audioContext.createBufferSource();
    source.buffer = await audioContext.decodeAudioData(data);
    source.connect(audioContext.destination);
    return new Track(audioPath, audioContext, source);
  }

  play() {
    this.source.start();
  }

  stop() {
    this.source.stop();
  }

  toggleMute() {}

  toggleEffect() {}

  pan() {}

  volume() {}

  toString() {
    return this.audioPath;
  }
}