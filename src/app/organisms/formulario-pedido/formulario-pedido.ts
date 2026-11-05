import { Component, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MensajeError } from '../../atoms/mensaje-error/mensaje-error';

@Component({
  imports: [ReactiveFormsModule, MensajeError],
  selector: 'app-formulario-pedido',
  styleUrl: './formulario-pedido.scss',
  templateUrl: './formulario-pedido.html',
})
export class FormularioPedido {
  readonly pagar = output<string>();
  readonly limpiar = output();

  protected readonly pagoIntentado = signal(false);
  protected readonly pedidoForm = new FormGroup({
    hora: new FormControl('', [Validators.required, Validators.pattern('^([01][0-9]|2[0-3]):[0-5][0-9]$')]),
    direccion: new FormControl('', [Validators.required, Validators.pattern('^[\\s\\S]{10,}$')]),
    metodoPago: new FormControl('tarjeta'),
    tarjeta: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{16}$')]),
    movil: new FormControl('^[0-9]{9}$'),
  })

  protected get hora() {
    return this.pedidoForm.get('hora');
  }

  protected get direccion() {
    return this.pedidoForm.get('direccion');
  }

  protected get metodoPago() {
    return this.pedidoForm.get('metodoPago');
  }

  protected get tarjeta() {
    return this.pedidoForm.get('tarjeta');
  }

  protected get movil() {
    return this.pedidoForm.get('movil');
  }

  protected realizarPago() {
    if (!this.datosCorrectos()) {
      this.pagoIntentado.set(true);
      return;
    }
  
    const datos = this.pedidoForm.value;
    this.pagar.emit(`Lo llevaremos a ${datos.direccion} a las ${datos.hora}.`);
  }

  protected limpiarPedido() {
    this.limpiar.emit();
  }

  private datosCorrectos(): boolean {
    const pagoCorrecto = this.metodoPago?.value === 'tarjeta' ? this.tarjeta?.valid : this.movil?.valid;
    return !!(this.hora?.valid && this.direccion?.valid && pagoCorrecto);
  }
}
