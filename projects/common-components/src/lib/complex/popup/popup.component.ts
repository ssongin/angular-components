import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../essential/header/header.component';
import { DividerComponent } from '../../essential/divider/divider.component';

@Component({
  selector: 'cc-popup',
  standalone: true,
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  imports: [
    HeaderComponent,
    DividerComponent
  ]
})
export class PopupComponent {
  @Input() visible = false;
  @Input() title = '';
}
