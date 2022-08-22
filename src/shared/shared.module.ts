import { NgModule } from '@angular/core';
import { BaseComponent } from './bases/base.component';
import { ValorantService } from './services/valorant.service';

@NgModule({
  imports: [],
  exports: [],
  providers: [ValorantService],
})
export class SharedModule {}
