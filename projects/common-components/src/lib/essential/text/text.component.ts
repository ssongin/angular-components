import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-text',
  template: `
    <p
      [class.muted]="muted"
      [class.align-left]="align === 'left'"
      [class.align-center]="align === 'center'"
      [class.align-right]="align === 'right'"
    >
      <ng-content></ng-content>
    </p>
  `,
  styleUrls: ['./text.component.css'],
  standalone: true
})
export class TextComponent {
  @Input() muted = false;
  @Input() align: 'left' | 'center' | 'right' = 'left';
}
