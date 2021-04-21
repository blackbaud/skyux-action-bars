import {
  Component
} from '@angular/core';

@Component({
  selector: 'sky-test-cmp-modal',
  templateUrl: './summary-action-bar-modal-demo.component.html',
  styles: [`
    sky-key-info {
      margin-right: 20px;
    }
  `]
})
export class SkySummaryActionBarModalDemoComponent {

  public onCancelClick(): void {
    console.log('Cancel button clicked.');
  }

  public onPrimaryActionClick(): void {
    console.log('Primary action button clicked.');
  }

  public onSecondaryActionClick(): void {
    console.log('Secondary action button clicked.');
  }

  public onSecondaryAction2Click(): void {
    console.log('Secondary action 2 button clicked.');
  }

}
