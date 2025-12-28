import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: 'default' | 'primary' = 'default';
  @Input() disabled = false;

  @Output() clicked = new EventEmitter<Event>();

  handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.clicked.emit(event);
  }
}
