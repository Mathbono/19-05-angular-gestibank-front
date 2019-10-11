import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindConseillersComponent } from './find-conseillers.component';

describe('FindConseillersComponent', () => {
  let component: FindConseillersComponent;
  let fixture: ComponentFixture<FindConseillersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindConseillersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindConseillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
