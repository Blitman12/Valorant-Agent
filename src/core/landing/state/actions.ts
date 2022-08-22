import { createAction, props } from '@ngrx/store';
import { Agent } from 'src/shared/models';

export const requestLoadValorantAgents = createAction(
  '[Landing] Request Valorant Agents'
);
export const loadValorantAgentSuccess = createAction(
  '[Landing] Got Valorant Agent Success',
  props<{ agents: Agent[] }>()
);
export const loadValorantAgentFailure = createAction(
  '[Landing] Get Valorant Agent Failure'
);
