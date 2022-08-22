import { Component, OnInit } from '@angular/core';

import { LandingSelectors } from './state/selectors';
import { landingActions } from './state/index';
import { Store } from '@ngrx/store';
import { BaseComponent } from 'src/shared/bases';
import { Agent } from 'src/shared/models';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent extends BaseComponent implements OnInit {
  public agents = new Array<Agent>();

  public constructor(
    private _landingSelector: LandingSelectors,
    private _store: Store
  ) {
    super();
  }

  public ngOnInit(): void {
    this._store.dispatch(landingActions.requestLoadValorantAgents());
    this.setupSubscriptions();
  }

  public getCharacterTags(agent: Agent): string {
    const characterTags = agent.characterTags;
    return characterTags.join(', ');
  }

  private setupSubscriptions(): void {
    this._subscriptions.push(
      this._landingSelector.agentInfo$.subscribe(
        (agents) => (this.agents = agents)
      )
    );
  }
}
