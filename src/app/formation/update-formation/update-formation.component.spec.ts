import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormationComponent } from './update-agence.component';

describe('UpdateFormationComponent', () => {
  let component: UpdateFormationComponent;
  let fixture: ComponentFixture<UpdateFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
