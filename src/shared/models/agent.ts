import { ValorantAbility } from './valorant/valorant-ability';
import { ValorantRole } from './valorant/valorant-role';
import { ValorantVoice } from './valorant/valorant-voice';

export interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  characterTags: string[];
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  role: ValorantRole;
  abilities: ValorantAbility[];
  voiceLine: ValorantVoice;
}
