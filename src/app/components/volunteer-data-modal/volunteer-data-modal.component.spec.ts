import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDataModalComponent } from './volunteer-data-modal.component';

describe('VolunteerDataModalComponent', () => {
  let component: VolunteerDataModalComponent;
  let fixture: ComponentFixture<VolunteerDataModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerDataModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
