import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { vi } from 'vitest';

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

  it('should apply type attribute', () => {
    component.type = 'submit';
    fixture.detectChanges();

    const button = nativeElement.querySelector('button')!;
    expect(button.getAttribute('type')).toBe('submit');
  });

  it('should apply primary class when variant is primary', () => {
    component.variant = 'primary';
    fixture.detectChanges();

    const button = nativeElement.querySelector('button')!;
    expect(button.classList.contains('primary')).toBe(true);
  });

  it('should not apply primary class when variant is default', () => {
    component.variant = 'default';
    fixture.detectChanges();

    const button = nativeElement.querySelector('button')!;
    expect(button.classList.contains('primary')).toBe(false);
  });

  it('should emit click event when clicked', () => {
    const spy = vi.spyOn(component.onClick, 'emit');

    const button = nativeElement.querySelector('button')!;
    button.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should NOT emit click event when disabled', () => {
    const spy = vi.spyOn(component.onClick, 'emit');

    component.disabled = true;
    fixture.detectChanges();

    const button = nativeElement.querySelector('button')!;
    button.click();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should set disabled attribute when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const button = nativeElement.querySelector('button')!;
    expect(button.disabled).toBe(true);
  });
});
