import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitViewSummaryActionBarVisualComponent } from './split-view-summary-action-bar/split-view-summary-action-bar-demo.component';
import { SkySummaryActionBarDemoComponent } from './summary-action-bar/summary-action-bar-demo.component';
import { SkySummaryActionBarModalDemoComponent } from './summary-action-bar/summary-action-bar-modal-demo.component';
import { SkyTabSummaryActionBarDemoComponent } from './tab-summary-action-bar/tab-summary-action-bar-demo.component';
import { VisualComponent } from './visual.component';
import { SkyConfirmModule, SkyModalModule } from '@skyux/modals';
import { SkyKeyInfoModule } from '@skyux/indicators';
import { SkyTabsModule } from '@skyux/tabs';
import { SkySplitViewModule } from '@skyux/split-view';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SkySummaryActionBarModule } from 'projects/action-bars/src/public-api';
import { SkyE2eThemeSelectorModule } from '@skyux/e2e-client';



@NgModule({
  declarations: [
    SplitViewSummaryActionBarVisualComponent,
    SkySummaryActionBarDemoComponent,
    SkySummaryActionBarModalDemoComponent,
    SkyTabSummaryActionBarDemoComponent,
    VisualComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NoopAnimationsModule,
    RouterModule,
    SkyConfirmModule,
    SkyE2eThemeSelectorModule,
    SkyKeyInfoModule,
    SkyModalModule,
    SkySummaryActionBarModule,
    SkyTabsModule,
    SkySplitViewModule
  ]
})
export class VisualModule { }
