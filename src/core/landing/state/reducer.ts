import { createReducer, on, Action } from '@ngrx/store';
import { Agent } from 'src/shared/models';
import { landingActions } from '.';

export const featureName = 'Landing';

export interface LandingState {
  agents: Agent[];
}

export const initialState: LandingState = {
  agents: [],
};

const landingReducer = createReducer(
  initialState,
  on(landingActions.requestLoadValorantAgents, () => ({
    ...initialState,
  })),
  on(landingActions.loadValorantAgentSuccess, (state, { agents }) => ({
    ...state,
    agents,
  }))
);

export function reducer(state: LandingState, action: Action): LandingState {
  return landingReducer(state, action);
}
