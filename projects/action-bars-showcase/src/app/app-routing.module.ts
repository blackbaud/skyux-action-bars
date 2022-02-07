import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkySummaryActionBarDemoComponent } from './visual/summary-action-bar/summary-action-bar-demo.component';
import { SkyTabSummaryActionBarDemoComponent } from './visual/tab-summary-action-bar/tab-summary-action-bar-demo.component';
import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
    path: '',
    component: VisualComponent,
  },
  {
    path: 'visual/summary-action-bar',
    component: SkySummaryActionBarDemoComponent,
  },
  {
    path: 'visual/tab-summary-action-bar',
    component: SkyTabSummaryActionBarDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
