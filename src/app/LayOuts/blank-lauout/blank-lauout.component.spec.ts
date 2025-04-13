import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankLauoutComponent } from './blank-lauout.component';

describe('BlankLauoutComponent', () => {
  let component: BlankLauoutComponent;
  let fixture: ComponentFixture<BlankLauoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlankLauoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlankLauoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
