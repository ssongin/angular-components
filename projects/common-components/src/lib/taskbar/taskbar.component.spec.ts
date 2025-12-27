import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskbarComponent } from './taskbar.component';
import { TaskbarItemComponent } from './taskbar-item.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <cc-taskbar>
      <cc-taskbar-item type="item" label="Test 1"></cc-taskbar-item>
      <cc-taskbar-item type="item" label="Test 2"></cc-taskbar-item>
    </cc-taskbar>
  `,
  standalone: true,
  imports: [TaskbarComponent, TaskbarItemComponent],
})
class TestHostComponent {}

describe('CcTaskbarComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should render taskbar items', () => {
    const items = fixture.debugElement.queryAll(
      By.directive(TaskbarItemComponent)
    );
    expect(items.length).toBe(2);
  });
});
