import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-layout',
  standalone: true,
  template: `
    <div [class]="layoutClass">
      <ng-content />
    </div>
  `,
  styles: [`
    .layout-full {
      min-height: 100vh;
      width: 100%;
    }

    .layout-centered {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `],
})
export class LayoutComponent {
  @Input() type: 'full' | 'centered' | '' | undefined = 'full';

  get layoutClass() {
    switch(this.type) {
        case ('full'): return 'layout-full';
        case ('centered'): return "layout-centered";
        default: return 'layout-full';
    }
  }
}
