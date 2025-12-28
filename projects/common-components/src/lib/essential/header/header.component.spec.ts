import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display label', () => {
    component.label = 'Test Header';
    fixture.detectChanges();

    const h2 = nativeElement.querySelector('h2');
  expect(h2?.textContent?.trim()).toBe('Test Header');  });

  it('should apply md class by default', () => {
    fixture.detectChanges();

    const h2 = nativeElement.querySelector('h2');
    expect(h2?.classList.contains('md')).toBe(true);
  });

  it('should apply sm class when size is sm', () => {
    component.size = 'sm';
    fixture.detectChanges();

    const h2 = nativeElement.querySelector('h2');
    expect(h2?.classList.contains('sm')).toBe(true);
  });

  it('should apply lg class when size is lg', () => {
    component.size = 'lg';
    fixture.detectChanges();

    const h2 = nativeElement.querySelector('h2');
    expect(h2?.classList.contains('lg')).toBe(true);
  });
});
