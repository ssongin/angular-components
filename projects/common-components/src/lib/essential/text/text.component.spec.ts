import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextComponent } from './text.component';

describe('TextComponent', () => {
  let fixture: ComponentFixture<TextComponent>;
  let component: TextComponent;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render projected content', () => {
    fixture.nativeElement.innerHTML = '<cc-text>Hello</cc-text>';
    fixture.detectChanges();
    expect(nativeElement.textContent).toContain('Hello');
  });

  it('should apply muted class when muted is true', () => {
    component.muted = true;
    fixture.detectChanges();

    const p = nativeElement.querySelector('p');
    expect(p?.classList.contains('muted')).toBeTruthy();
  });

  it('should apply center alignment', () => {
    component.align = 'center';
    fixture.detectChanges();

    const p = nativeElement.querySelector('p');
    expect(p?.classList.contains('align-center')).toBeTruthy();
  });

  it('should apply right alignment', () => {
    component.align = 'right';
    fixture.detectChanges();

    const p = nativeElement.querySelector('p');
    expect(p?.classList.contains('align-right')).toBeTruthy();
  });

  it('should default to left alignment', () => {
    fixture.detectChanges();

    const p = nativeElement.querySelector('p');
    expect(p?.classList.contains('align-left')).toBeTruthy();
  });
});
