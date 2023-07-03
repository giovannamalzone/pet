import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpUsPageComponent } from './help-us-page.component';

describe('HelpUsPageComponent', () => {
  let component: HelpUsPageComponent;
  let fixture: ComponentFixture<HelpUsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpUsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
