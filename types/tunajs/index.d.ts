export = tunajs;

declare class tunajs {
  constructor(context: any);

  Bitcrusher(properties: { [key: string]: any; }): void;

  Cabinet(properties: { [key: string]: any; }): void;

  Chorus(properties: { [key: string]: any; }): void;

  Compressor(properties: { [key: string]: any; }): void;

  Convolver(properties: { [key: string]: any; }): void;

  Delay(properties: { [key: string]: any; }): void;

  EnvelopeFollower(properties: { [key: string]: any; }): void;

  Filter(properties: { [key: string]: any; }): void;

  Gain(properties: { [key: string]: any; }): void;

  LFO(properties: { [key: string]: any; }): void;

  MoogFilter(properties: { [key: string]: any; }): void;

  Overdrive(properties: { [key: string]: any; }): void;

  Panner(properties: { [key: string]: any; }): void;

  Phaser(properties: { [key: string]: any; }): void;

  PingPongDelay(properties: { [key: string]: any; }): void;

  Tremolo(properties: { [key: string]: any; }): void;

  WahWah(properties: { [key: string]: any; }): void;

  toString(): string;

  static toString(): string;
}