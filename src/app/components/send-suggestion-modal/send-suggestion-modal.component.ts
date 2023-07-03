import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-send-suggestion-modal',
  templateUrl: './send-suggestion-modal.component.html',
  styleUrls: ['./send-suggestion-modal.component.scss'],
})
export class SendSuggestionModalComponent {
  text = 'SEND';
  ideaDescription: string = '';
  maxLength: number = 400;
  minLength: number = 20;
  remainingChars: number = 400;

  constructor(
    public dialogRef: MatDialogRef<SendSuggestionModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; subtitle: string; bodyText: string }
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }

  onInputChange() {
    if (this.ideaDescription.length > this.maxLength) {
      this.ideaDescription = this.ideaDescription.substring(0, this.maxLength);
    }
    this.remainingChars = this.maxLength - this.ideaDescription.length;
  }

  disableButton(): boolean {
    return this.ideaDescription.length < this.minLength;
  }
}
