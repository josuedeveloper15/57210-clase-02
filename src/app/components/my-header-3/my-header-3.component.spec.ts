import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeader3Component } from './my-header-3.component';

describe('MyHeader3Component', () => {
  let component: MyHeader3Component;
  let fixture: ComponentFixture<MyHeader3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyHeader3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHeader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
