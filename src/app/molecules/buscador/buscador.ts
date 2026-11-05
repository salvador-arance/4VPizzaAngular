import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-buscador',
  styleUrl: './buscador.scss',
  templateUrl: './buscador.html',
})
export class Buscador {
  readonly buscar = output<string>();

  protected readonly ingrediente = new FormControl('');

  protected lanzarBusqueda() {
    // ?? es el operador de coalescencia nula, si el valor está vacío se queda en ''
    this.buscar.emit(this.ingrediente.value ?? '');
  }
}
