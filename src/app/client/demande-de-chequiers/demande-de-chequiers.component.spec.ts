import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDeChequiersComponent } from './demande-de-chequiers.component';

describe('DemandeDeChequiersComponent', () => {
  let component: DemandeDeChequiersComponent;
  let fixture: ComponentFixture<DemandeDeChequiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDeChequiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDeChequiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
