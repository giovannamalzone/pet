import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet-input',
  templateUrl: './pet-input.component.html',
  styleUrls: ['./pet-input.component.scss'],
})
export class PetInputComponent {

  @Input() label = '';
  @Input() minLength!: number;
  @Input() maxLength!: number;



}
