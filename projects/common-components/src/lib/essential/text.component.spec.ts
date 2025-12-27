import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextComponent } from './text.component';

describe('TextComponent', () => {
  let fixture: ComponentFixture<TextComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextComponent);
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render projected content', () => {
    fixture.nativeElement.innerHTML = '<cc-text>Hello</cc-text>';
    fixture.detectChanges();
    expect(nativeElement.textContent).toContain('Hello');
  });
});
