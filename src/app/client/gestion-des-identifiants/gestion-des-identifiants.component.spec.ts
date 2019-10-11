import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesIdentifiantsComponent } from './gestion-des-identifiants.component';

describe('GestionDesIdentifiantsComponent', () => {
  let component: GestionDesIdentifiantsComponent;
  let fixture: ComponentFixture<GestionDesIdentifiantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDesIdentifiantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesIdentifiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
