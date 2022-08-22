import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared/shared.module';
import { environment } from 'src/environments/environment';
import { LandingModule } from 'src/core/landing/landing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    LandingModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Valorant - DevTools',
      maxAge: 50,
      actionsBlocklist: actionBlockList(),
      logOnly: !environment.production,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

function actionBlockList(): string[] {
  return [
    '@ngrx/store/init',
    '@ngrx/store/update-reducers',
    '@ngrx/router-store/navigated',
    '@ngrx/router-store/request',
    '@ngrx/router-store/navigation',
  ];
}
