import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyacceptedrequestsComponent } from './myacceptedrequests.component';

describe('MyacceptedrequestsComponent', () => {
  let component: MyacceptedrequestsComponent;
  let fixture: ComponentFixture<MyacceptedrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyacceptedrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyacceptedrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
