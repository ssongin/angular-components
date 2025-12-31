import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type HeaderSize = 'xxlg' | 'xlg' | 'lg' | 'md' | 'sm' | 'xsm';
export type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;

@Component({
  selector: 'cc-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() size: HeaderSize = 'md';

  /**
   * Accessibility override.
   * Allows controlling the semantic heading level.
   */
  @Input() level?: HeaderLevel;

  readonly tag = computed(() => {
    if (this.level) return `h${this.level}` as const;

    return ({
      xxlg: 'h1',
      xlg: 'h2',
      lg: 'h3',
      md: 'h4',
      sm: 'h5',
      xsm: 'h6',
    } as const)[this.size];
  });
}
