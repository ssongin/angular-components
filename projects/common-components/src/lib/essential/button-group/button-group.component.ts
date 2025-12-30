import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'cc-button-group',
  standalone: true,
  template: `<ng-content />`,
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input('aria-label') ariaLabel?: string;
  @Input('aria-labelledby') ariaLabelledby?: string;

  @HostBinding('attr.role') role = 'group';
  @HostBinding('attr.aria-label') get hostAriaLabel() { return this.ariaLabel ?? null; }
  @HostBinding('attr.aria-labelledby') get hostAriaLabelledBy() { return this.ariaLabelledby ?? null; }

  // Only bind classes
  @HostBinding('class')
  get hostClasses(): string {
    return [
      'cc-button-group',
      `cc-button-group--${this.orientation}`,
    ].join(' ');
  }
}
