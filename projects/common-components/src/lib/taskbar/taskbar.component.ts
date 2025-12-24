import { Component } from '@angular/core';

@Component({
  selector: 'cc-taskbar',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styleUrls: ['./taskbar.component.css'],
})
export class CcTaskbarComponent {}
