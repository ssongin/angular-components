import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let component: ButtonComponent;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render projected content', () => {
    // Set projected content
    fixture.nativeElement.innerHTML = '<cc-button>Click me</cc-button>';
    fixture.detectChanges();
    expect(nativeElement.textContent).toContain('Click me');
  });

  it('should apply type attribute', () => {
    component.type = 'submit';
    fixture.detectChanges();
    expect(nativeElement.querySelector('button')?.getAttribute('type')).toBe('submit');
  });

  it('should apply primary class when variant is primary', () => {
    component.variant = 'primary';
    fixture.detectChanges();
    expect(nativeElement.querySelector('button')?.classList).toContain('primary');
  });

  it('should not have primary class when variant is default', () => {
    component.variant = 'default';
    fixture.detectChanges();
    expect(nativeElement.querySelector('button')?.classList).not.toContain('primary');
  });
});
