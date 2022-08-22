import { Component, OnInit } from '@angular/core';

import { LandingSelectors } from './state/selectors';
import { landingActions } from './state/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(
    private _landingSelector: LandingSelectors,
    private _store: Store
  ) {}

  ngOnInit(): void {
    console.log('landing hit');
    this._store.dispatch(landingActions.requestLoadValorantAgents());
  }
}
