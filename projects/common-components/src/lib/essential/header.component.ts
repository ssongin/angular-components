import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-header',
  template: `<h2>{{ label }}</h2>`,
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  @Input() label = '';
}