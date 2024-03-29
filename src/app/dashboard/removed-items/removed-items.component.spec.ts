import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedItemsComponent } from './removed-items.component';

describe('RemovedItemsComponent', () => {
  let component: RemovedItemsComponent;
  let fixture: ComponentFixture<RemovedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemovedItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemovedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
