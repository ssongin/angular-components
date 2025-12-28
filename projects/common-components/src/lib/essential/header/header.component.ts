import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-header',
  template: `
    <h2 [class.sm]="size === 'sm'"
        [class.md]="size === 'md'"
        [class.lg]="size === 'lg'">
      {{ label }}
    </h2>
  `,
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  @Input() label = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}