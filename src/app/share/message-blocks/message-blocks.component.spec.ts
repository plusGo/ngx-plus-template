import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBlocksComponent } from './message-blocks.component';

describe('MessageBlocksComponent', () => {
  let component: MessageBlocksComponent;
  let fixture: ComponentFixture<MessageBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
