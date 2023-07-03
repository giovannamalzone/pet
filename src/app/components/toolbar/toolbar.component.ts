import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PetModalComponent } from '../pet-modal/pet-modal.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() text = 'Contact Us';
  title: string = 'CONTACT US';
  subtitle: string = '+55 (11) 99999-9999';
  bodyText: string = 'petfoster@email.com';

  constructor(private router: Router, private dialog: MatDialog) {}

  isSelected(route: string) {
    return (
      this.router.url === route || (this.router.url === '/' && route === '')
    );
  }

  openModal(): void {
    const dialogRef = this.dialog.open(PetModalComponent, {
      data: {
        title: this.title,
        subtitle: this.subtitle,
        bodyText: this.bodyText,
      },
    });
  }
}
