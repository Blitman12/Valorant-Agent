import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

import { Agent, ValorantAgent } from '../models';

@Injectable({ providedIn: 'root' })
export class ValorantService {
  private _url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true';
  public constructor(private _http: HttpClient) {}

  public getAgents(): Observable<Agent[]> {
    return this._http.get<any>(this._url, { observe: 'response' }).pipe(
      switchMap((response: HttpResponse<any>) => {
        console.log(response);
        const agents = new Array<Agent>();
        if (response.body.data.length > 0) {
          response.body.data.forEach((item: ValorantAgent) => {
            const agent = {
              uuid: item.uuid,
              displayName: item.displayName,
              description: item.description,
              characterTags: item.characterTags,
              displayIcon: item.displayIcon,
              displayIconSmall: item.displayIconSmall,
              bustPortrait: item.bustPortrait,
              fullPortrait: item.fullPortrait,
              fullPortraitV2: item.fullPortraitV2,
              killfeedPortrait: item.killfeedPortrait,
              background: item.background,
              backgroundGradientColors: item.backgroundGradientColors,
              role: item.role,
              abilities: item.abilities,
              voiceLine: item.voiceLine,
            };
            agents.push(agent);
          });
        }
        return of(agents);
      })
    );
  }
}
