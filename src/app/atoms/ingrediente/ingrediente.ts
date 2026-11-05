import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ingrediente',
  styleUrl: './ingrediente.scss',
  templateUrl: './ingrediente.html',
})
export class Ingrediente {
  readonly nombre = input.required<string>();
}
