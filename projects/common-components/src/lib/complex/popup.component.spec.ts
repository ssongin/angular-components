import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupComponent } from './popup.component';
import { HeaderComponent } from '../essential/header.component';
import { DividerComponent } from '../essential/divider.component';
import { TextComponent } from '../essential/text.component';
import { ButtonComponent } from '../essential/button.component';

describe('PopupComponent', () => {
  let fixture: ComponentFixture<PopupComponent>;
  let component: PopupComponent;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PopupComponent,
        HeaderComponent,
        DividerComponent,
        TextComponent,
        ButtonComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header with title', () => {
    component.visible = true;
    component.title = 'Popup Title';
    fixture.detectChanges();
    expect(nativeElement.querySelector('cc-header')?.textContent).toContain('Popup Title');
  });

  it('should display content and controls', () => {
    component.visible = true;
    fixture.detectChanges();
    const contentDiv = nativeElement.querySelector('.content');
    const controlsDiv = nativeElement.querySelector('.controls');
    expect(contentDiv).toBeTruthy();
    expect(controlsDiv).toBeTruthy();
  });

  it('should hide when visible is false', () => {
    component.visible = false;
    fixture.detectChanges();
    expect(nativeElement.querySelector('.overlay')).toBeFalsy();
  });
});
