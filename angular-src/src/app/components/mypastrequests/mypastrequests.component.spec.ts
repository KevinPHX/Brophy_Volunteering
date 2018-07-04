import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypastrequestsComponent } from './mypastrequests.component';

describe('MypastrequestsComponent', () => {
  let component: MypastrequestsComponent;
  let fixture: ComponentFixture<MypastrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypastrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypastrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
