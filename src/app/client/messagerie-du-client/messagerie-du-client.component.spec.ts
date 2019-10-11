import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieDuClientComponent } from './messagerie-du-client.component';

describe('MessagerieDuClientComponent', () => {
  let component: MessagerieDuClientComponent;
  let fixture: ComponentFixture<MessagerieDuClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagerieDuClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerieDuClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
