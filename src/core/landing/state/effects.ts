import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Agent } from 'src/shared/models';
import { ValorantService } from 'src/shared/services/valorant.service';
import { landingActions } from '.';

@Injectable({ providedIn: 'root' })
export class LandingEffects {
  requestAgents$ = createEffect(() =>
    this._actions$.pipe(
      ofType(landingActions.requestLoadValorantAgents),
      switchMap(() =>
        this._valorantService.getAgents().pipe(
          map((agents) => this.handleReponse(agents)),
          catchError((error) =>
            this.handleFailure(error, landingActions.loadValorantAgentFailure())
          )
        )
      )
    )
  );

  public constructor(
    private _store: Store,
    private _actions$: Actions,
    private _valorantService: ValorantService
  ) {}

  private handleReponse(agents: Agent[]) {
    if (agents.length === 0) {
      throw new Error('Something went wrong');
    }
    return landingActions.loadValorantAgentSuccess({ agents });
  }

  private handleFailure(error: any, action: any) {
    console.log('Something strange in handleFailure', error);
    return of(action);
  }
}
