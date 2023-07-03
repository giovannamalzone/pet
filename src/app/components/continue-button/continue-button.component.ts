import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-continue-button',
  templateUrl: './continue-button.component.html',
  styleUrls: ['./continue-button.component.scss']
})
export class ContinueButtonComponent {
  @Input() text = '';
  @Input() disableButton: boolean = false;

  getButtonClass(): string {
    return this.disableButton ? 'disabled' : 'enabled';
  }
}
