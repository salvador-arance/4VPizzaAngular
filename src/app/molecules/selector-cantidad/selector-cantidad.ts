import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MensajeError } from '../../atoms/mensaje-error/mensaje-error';

@Component({
  imports: [ReactiveFormsModule, MensajeError],
  selector: 'app-selector-cantidad',
  styleUrl: './selector-cantidad.scss',
  templateUrl: './selector-cantidad.html',
})

export class SelectorCantidad {
  readonly anadir = output<number>();

  protected readonly cantidadForm = new FormGroup ({
    cantidad: new FormControl(1, [Validators.required, Validators.pattern('^[1-9][0-9]?$')]),
  });

  protected get cantidad() {
    return this.cantidadForm.get('cantidad');
  }

  protected anadirAlPedido() {
    if (this.cantidadForm.valid) {
      // ! -> fíate que no soy null 
      this.anadir.emit(this.cantidadForm.value.cantidad!);
    }
  }
}
