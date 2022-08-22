import { ValorantAbility } from './valorant-ability';
import { ValorantRole } from './valorant-role';
import { ValorantVoice } from './valorant-voice';

export interface ValorantAgent {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: string[];
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: ValorantRole;
  abilities: ValorantAbility[];
  voiceLine: ValorantVoice;
}
