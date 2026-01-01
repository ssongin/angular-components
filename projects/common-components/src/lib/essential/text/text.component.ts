import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cc-text',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./text.component.scss'],
  templateUrl: './text.component.html',
})
export class TextComponent {
  @Input() element: 'p' | 'span' | 'div' = 'p';

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() muted = false;

  @Input() align: 'left' | 'center' | 'right' = 'left';

  get classes() {
    return {
      [`size-${this.size}`]: true,
      [`align-${this.align}`]: true,
      muted: this.muted,
    };
  }
}