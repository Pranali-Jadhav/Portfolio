// audio.service.ts
import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private sound: Howl;

  constructor() {
    this.sound = new Howl({
      src: ['../assets/Music/bgM.mp3'], // Adjust the path accordingly
      volume: 0.5, // Adjust the volume as needed
    });
  }

  play() {
    this.sound.play();
  }

  pause() {
    this.sound.pause();
  }
  isPlaying(): boolean {
    return this.sound.playing();
  }
}
