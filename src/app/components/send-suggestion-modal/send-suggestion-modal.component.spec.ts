import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSuggestionModalComponent } from './send-suggestion-modal.component';

describe('SendSuggestionModalComponent', () => {
  let component: SendSuggestionModalComponent;
  let fixture: ComponentFixture<SendSuggestionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendSuggestionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendSuggestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
