import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomiaryComponent } from './pomiary.component';

describe('PomiaryComponent', () => {
  let component: PomiaryComponent;
  let fixture: ComponentFixture<PomiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
