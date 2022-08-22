import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import * as fromReducer from './reducer';

const getLandingState = createFeatureSelector<fromReducer.LandingState>(
  fromReducer.featureName
);

export const getAgentInfo = createSelector(
  getLandingState,
  (state) => state.agents
);

@Injectable({
  providedIn: 'root',
})
export class LandingSelectors {
  public agentInfo$ = this._store.select(getAgentInfo);
  public constructor(private _store: Store) {}
}
