import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueComptesComponent } from './historique-comptes.component';

describe('HistoriqueComptesComponent', () => {
  let component: HistoriqueComptesComponent;
  let fixture: ComponentFixture<HistoriqueComptesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueComptesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
