import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnDestroy,
  QueryList
} from '@angular/core';

import {
  Subscription
} from 'rxjs/Subscription';

import {
  SkyMediaBreakpoints,
  SkyMediaQueryService
} from '@skyux/core';

import {
  SkySummaryActionBarSecondaryActionComponent
} from './summary-action-bar-secondary-action.component';

@Component({
  selector: 'sky-summary-action-bar-secondary-actions',
  templateUrl: './summary-action-bar-secondary-actions.component.html',
  styleUrls: ['./summary-action-bar-secondary-actions.component.scss']
})
export class SkySummaryActionBarSecondaryActionsComponent implements AfterContentInit, OnDestroy {

  @ContentChildren(SkySummaryActionBarSecondaryActionComponent)
  public actions: QueryList<SkySummaryActionBarSecondaryActionComponent>;

  public isXsScreen: boolean;

  private mediaQuerySubscription: Subscription;
  private actionChanges: Subscription;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private mediaQueryService: SkyMediaQueryService
  ) { }

  public ngAfterContentInit(): void {
    this.mediaQuerySubscription = this.mediaQueryService.subscribe((args: SkyMediaBreakpoints) => {
      this.isXsScreen = args === SkyMediaBreakpoints.xs;
      this.checkAndUpdateChildrenType();
    });

    this.actionChanges = this.actions.changes.subscribe(() => {
      this.checkAndUpdateChildrenType();
    });
    if (this.mediaQueryService.current === SkyMediaBreakpoints.xs) {
      this.isXsScreen = true;
    }
    this.checkAndUpdateChildrenType();
  }

  public ngOnDestroy(): void {
    this.mediaQuerySubscription.unsubscribe();
    this.actionChanges.unsubscribe();
  }

  private checkAndUpdateChildrenType() {
    /* istanbul ignore else */
    if (this.actions) {
      let isDropdown = false;
      if (this.actions.length >= 5 || this.isXsScreen) {
        isDropdown = true;
      }
      this.actions.forEach(action => {
        action.isDropdown = isDropdown;
      });
    }
    this.changeDetector.detectChanges();
  }

}
