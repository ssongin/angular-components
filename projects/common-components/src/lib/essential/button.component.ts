import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-button',
  template: `
    <button [type]="type" [class.primary]="variant === 'primary'">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.css'],
  standalone: true
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: 'default' | 'primary' = 'default';
}
