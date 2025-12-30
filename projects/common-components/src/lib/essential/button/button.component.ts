import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'cc-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant:
    | 'default'
    | 'outline'
    | 'primary'
    | 'warn'
    | 'critical'
    | 'link' = 'default';

  @Input() disabled = false;
  @Input('aria-label') ariaLabel?: string;

  @Output() clicked = new EventEmitter<Event>();

  @HostBinding('class')
  get hostClasses() {
    return [
      'cc-button',
      `cc-button--${this.variant}`,
      `cc-button--${this.size}`,
      this.disabled && 'is-disabled',
    ]
      .filter(Boolean)
      .join(' ');
  }

  handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.clicked.emit(event);
  }
}
