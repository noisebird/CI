import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectorLevelChildComponent } from './injector-level-child.component';

describe('InjectorLevelChildComponent', () => {
  let component: InjectorLevelChildComponent;
  let fixture: ComponentFixture<InjectorLevelChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectorLevelChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectorLevelChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
