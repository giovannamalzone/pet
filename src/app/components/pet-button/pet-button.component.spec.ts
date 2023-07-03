import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetButtonComponent } from './pet-button.component';

describe('PetButtonComponent', () => {
  let component: PetButtonComponent;
  let fixture: ComponentFixture<PetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
