import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-mensaje-error',
  styleUrl: './mensaje-error.scss',
  templateUrl: './mensaje-error.html',
})
export class MensajeError {
  readonly texto = input.required<string>();
}
