import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectorLevelComponent } from './injector-level.component';

describe('InjectorLevelComponent', () => {
  let component: InjectorLevelComponent;
  let fixture: ComponentFixture<InjectorLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectorLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectorLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
