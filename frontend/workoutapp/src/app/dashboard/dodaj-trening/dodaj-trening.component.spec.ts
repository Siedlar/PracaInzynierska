import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajTreningComponent } from './dodaj-trening.component';

describe('DodajTreningComponent', () => {
  let component: DodajTreningComponent;
  let fixture: ComponentFixture<DodajTreningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajTreningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajTreningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
