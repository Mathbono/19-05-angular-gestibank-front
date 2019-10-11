import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesNotificationsComponent } from './preferences-notifications.component';

describe('PreferencesNotificationsComponent', () => {
  let component: PreferencesNotificationsComponent;
  let fixture: ComponentFixture<PreferencesNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencesNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
