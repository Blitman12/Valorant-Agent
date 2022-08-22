import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from 'src/shared/shared.module';
import { LandingComponent } from './landing.component';
import { LandingEffects } from './state/effects';
import { fromLanding } from './state';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(fromLanding.featureName, fromLanding.reducer),
    EffectsModule.forFeature([LandingEffects]),
  ],
})
export class LandingModule {}
