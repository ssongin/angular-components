import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonGroupComponent } from './button-group.component';

describe('ButtonGroupComponent', () => {
  let fixture: ComponentFixture<ButtonGroupComponent>;
  let component: ButtonGroupComponent;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonGroupComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have role="group"', () => {
    expect(host.getAttribute('role')).toBe('group');
  });

  it('should apply base class', () => {
    expect(host.classList.contains('cc-button-group')).toBe(true);
  });

  it('should be horizontal by default', () => {
    expect(host.classList.contains('cc-button-group--horizontal')).toBe(true);
  });

  it('should apply vertical orientation', () => {
    fixture = TestBed.createComponent(ButtonGroupComponent);
    component = fixture.componentInstance;
    component.orientation = 'vertical';
    fixture.detectChanges();

    host = fixture.nativeElement;
    expect(host.classList.contains('cc-button-group--vertical')).toBe(true);
  });

  it('should apply aria-label', () => {
    fixture = TestBed.createComponent(ButtonGroupComponent);
    component = fixture.componentInstance;
    component.ariaLabel = 'Media controls'; // set BEFORE detectChanges
    fixture.detectChanges();

    host = fixture.nativeElement;
    expect(host.getAttribute('aria-label')).toBe('Media controls');
  });

  it('should apply aria-labelledby', () => {
    fixture = TestBed.createComponent(ButtonGroupComponent);
    component = fixture.componentInstance;
    component.ariaLabelledby = 'controls-title'; // set BEFORE detectChanges
    fixture.detectChanges();

    host = fixture.nativeElement;
    expect(host.getAttribute('aria-labelledby')).toBe('controls-title');
  });
});
