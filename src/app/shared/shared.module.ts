import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Components
import { PanelModule } from 'primeng-lts/panel';
import { ButtonModule } from 'primeng-lts/button';
import { CardModule } from 'primeng-lts/card';
import { CarouselModule } from 'primeng-lts/carousel';
import {DividerModule} from 'primeng-lts/divider';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // PrimeNG Modules
    PanelModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    DividerModule,
    FieldsetModule,
  ],
  exports: [
    // Export PrimeNG Modules so they are available in other modules
    PanelModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    DividerModule,
    FieldsetModule,
  ],
})
export class SharedModule {}
