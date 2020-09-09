import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'sky-summary-action-bar-cancel',
  templateUrl: './summary-action-bar-cancel.component.html',
  styleUrls: ['./summary-action-bar-cancel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkySummaryActionBarCancelComponent {

/**
 * Indicates whether to disable the cancel action.
 */
  @Input()
  public disabled = false;

/**
 * Fires when users click the cancel action.
 */
  @Output()
  public actionClick = new EventEmitter<void>();

  public onCancelClicked(): void {
    this.actionClick.emit();
  }
}
