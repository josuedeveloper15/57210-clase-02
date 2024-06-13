import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeader4Component } from './my-header-4.component';

describe('MyHeader4Component', () => {
  let component: MyHeader4Component;
  let fixture: ComponentFixture<MyHeader4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyHeader4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHeader4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
