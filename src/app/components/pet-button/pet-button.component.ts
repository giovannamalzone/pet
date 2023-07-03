import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet-button',
  templateUrl: './pet-button.component.html',
  styleUrls: ['./pet-button.component.scss'],
})
export class PetButtonComponent {
  @Input() text = '';
}
