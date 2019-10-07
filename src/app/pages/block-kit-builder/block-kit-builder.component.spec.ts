import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockKitBuilderComponent } from './block-kit-builder.component';

describe('BlockKitBuilderComponent', () => {
  let component: BlockKitBuilderComponent;
  let fixture: ComponentFixture<BlockKitBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockKitBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockKitBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
