import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ValorantService } from './services/valorant.service';

@NgModule({
  imports: [MatCardModule],
  exports: [MatCardModule],
  providers: [ValorantService],
})
export class SharedModule {}
