import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TaskbarItemComponent } from './taskbar-item.component';
import { CommonModule } from '@angular/common';

@Component({
  template: `
    <cc-taskbar-item type="menu" label="Applications" [disabled]="parentDisabled">
      <cc-taskbar-item type="item" label="Network" [disabled]="childExplicitDisabled"></cc-taskbar-item>
      <cc-taskbar-item type="item" label="Settings" [disabled]="true"></cc-taskbar-item>
    </cc-taskbar-item>
  `,
  standalone: true,
  imports: [TaskbarItemComponent, CommonModule],
})
class TestHostComponent {
  parentDisabled = false;
  childExplicitDisabled = false;
}

describe('CcTaskbarItemComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should render parent item label', () => {
    const parentLabel = fixture.debugElement.query(By.css('.item .label'));
    expect(parentLabel.nativeElement.textContent).toContain('Applications');
  });

  it('should open submenu on mouse enter', () => {
    const parentItem = fixture.debugElement.query(By.css('.item'));
    parentItem.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    const submenu = fixture.debugElement.query(By.css('.submenu'));
    expect(submenu).toBeTruthy();
  });

  it('should close submenu on mouse leave', () => {
    const parentItem = fixture.debugElement.query(By.css('.item'));
    parentItem.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    parentItem.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    const submenu = fixture.debugElement.query(By.css('.submenu'));
    expect(submenu).toBeFalsy();
  });

  it('should calculate submenu level correctly', () => {
    const parentItemDE = fixture.debugElement.query(By.css('.item'));
    parentItemDE.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    const components = fixture.debugElement.queryAll(By.css('cc-taskbar-item'))
      .map(de => de.componentInstance as TaskbarItemComponent);

    components.forEach(c => c.ngAfterContentInit?.());

    const parent = components.find(c => c.label === 'Applications');
    const child1 = components.find(c => c.label === 'Network');
    const child2 = components.find(c => c.label === 'Settings');

    expect(parent).toBeDefined();
    expect(child1).toBeDefined();
    expect(child2).toBeDefined();

    expect(parent!.submenuLevel).toBe(1);
    expect(child1!.submenuLevel).toBe(2);
    expect(child2!.submenuLevel).toBe(2);
  });
});
