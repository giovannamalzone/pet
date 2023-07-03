import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pet-modal',
  templateUrl: './pet-modal.component.html',
  styleUrls: ['./pet-modal.component.scss']
})
export class PetModalComponent {

  constructor(
    public dialogRef: MatDialogRef<PetModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; subtitle: string, bodyText: string }
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }

}
