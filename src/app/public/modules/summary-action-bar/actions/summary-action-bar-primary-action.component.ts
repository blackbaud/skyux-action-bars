import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'sky-summary-action-bar-primary-action',
  templateUrl: './summary-action-bar-primary-action.component.html',
  styleUrls: ['./summary-action-bar-primary-action.component.scss']
})
export class SkySummaryActionBarPrimaryActionComponent {

  @Input()
  public isDisabled: boolean;

  @Output()
  public actionClick = new EventEmitter<void>();

  public buttonClicked(): void {
    this.actionClick.emit();
  }
}
