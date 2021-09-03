import {
  NgModule
} from '@angular/core';

import {
  SkySummaryActionBarModule
} from '../../../../src/modules/summary-action-bar/summary-action-bar.module';

import {
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyTabsModule
} from '@skyux/tabs';

import {
  SummaryActionBarDemoComponent
} from './summary-action-bar-demo.component';

@NgModule({
  imports: [
    SkyKeyInfoModule,
    SkyTabsModule,
    SkySummaryActionBarModule
  ],
  exports: [
    SummaryActionBarDemoComponent
  ],
  declarations: [
    SummaryActionBarDemoComponent
  ]
})
export class SummaryActionBarDemoModule { }
