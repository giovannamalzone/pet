import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SendSuggestionModalComponent } from 'src/app/components/send-suggestion-modal/send-suggestion-modal.component';
import { VolunteerDataModalComponent } from 'src/app/components/volunteer-data-modal/volunteer-data-modal.component';

@Component({
  selector: 'app-help-us-page',
  templateUrl: './help-us-page.component.html',
  styleUrls: ['./help-us-page.component.scss'],
})
export class HelpUsPageComponent {
  constructor(private dialog: MatDialog) {}

  openVolunteerModal(): void {
    const dialogRef = this.dialog.open(VolunteerDataModalComponent);
  }

  openSuggestionModal(): void {
    const dialogRef = this.dialog.open(SendSuggestionModalComponent);
  }
}
