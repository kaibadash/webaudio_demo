import Tuna from "tunajs";
export class AudioService {
    async loadAudio(path: string): Promise<ArrayBuffer> {
        const response = await fetch(path);
        return response.arrayBuffer();
    }

    async test() {
        const audioContext = new AudioContext();
        const tuna = new Tuna(audioContext);
        const sources: Array<AudioBufferSourceNode> = [];
        ["piano.m4a", "drum.m4a", "bass.m4a"].forEach(async path => {
            const data = await this.loadAudio(path);
            const source = audioContext.createBufferSource();
            source.buffer = await audioContext.decodeAudioData(data);
            source.connect(audioContext.destination);
            sources.push(source);
            source.start()
        });
    }
}