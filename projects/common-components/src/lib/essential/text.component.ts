import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-text',
  template: `
    <p [class.muted]="muted">
      <ng-content></ng-content>
    </p>
  `,
  styleUrls: ['./text.component.css'],
  standalone: true
})
export class TextComponent {
  @Input() muted = false;
}