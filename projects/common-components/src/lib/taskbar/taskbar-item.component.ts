import { Component, Input, ContentChildren, QueryList, AfterContentInit, AfterContentChecked } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cc-taskbar-item',
  templateUrl: './taskbar-item.component.html',
  styleUrls: ['./taskbar-item.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TaskbarItemComponent implements AfterContentInit, AfterContentChecked {
  @Input() type: 'menu' | 'item' = 'item';
  @Input() label = '';
  @Input() disabled = false;

  openMenu = false;
  submenuLevel = 1;

  @ContentChildren(TaskbarItemComponent, { descendants: true })
  children!: QueryList<TaskbarItemComponent>;

  private propagateDisabled() {
    this.children.forEach(child => {
      if (child !== this) {
        child.disabled = child.disabled || this.disabled;
        child.submenuLevel = this.submenuLevel + 1;

        child.propagateDisabled();
      }
    });
  }

  ngAfterContentInit() {
    this.propagateDisabled();
  }

  ngAfterContentChecked() {
    this.propagateDisabled();
  }

  open() {
    if (this.type === 'menu') this.openMenu = true;
  }

  close() {
    if (this.type === 'menu') this.openMenu = false;
  }

  onClick(event: Event) {
    if (this.disabled) {
      event.stopPropagation();
      return;
    }
    if (this.type === 'menu') {
      this.openMenu = !this.openMenu;
    }
  }
}
