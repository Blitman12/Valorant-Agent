import { ValorantMedia } from './valorant-media';

export interface ValorantVoice {
  minDuration: number;
  maxDuration: number;
  mediaList: ValorantMedia[];
}
