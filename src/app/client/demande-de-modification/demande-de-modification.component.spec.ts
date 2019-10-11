import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDeModificationComponent } from './demande-de-modification.component';

describe('DemandeDeModificationComponent', () => {
  let component: DemandeDeModificationComponent;
  let fixture: ComponentFixture<DemandeDeModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDeModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDeModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
