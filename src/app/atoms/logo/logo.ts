import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-logo',
  styleUrl: './logo.scss',
  templateUrl: './logo.html',
})
export class Logo {
  readonly tamano = input(40);
}
