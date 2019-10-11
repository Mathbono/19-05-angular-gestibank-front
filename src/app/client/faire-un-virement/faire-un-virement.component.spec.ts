import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireUnVirementComponent } from './faire-un-virement.component';

describe('FaireUnVirementComponent', () => {
  let component: FaireUnVirementComponent;
  let fixture: ComponentFixture<FaireUnVirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaireUnVirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaireUnVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
