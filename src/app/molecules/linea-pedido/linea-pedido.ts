import { Component, input } from '@angular/core';
import { Precio } from '../../atoms/precio/precio';

@Component({
  imports: [Precio],
  selector: 'app-linea-pedido',
  styleUrl: './linea-pedido.scss',
  templateUrl: './linea-pedido.html',
})
export class LineaPedido {
  readonly nombre = input.required<string>();
  readonly cantidad = input.required<number>();
  readonly subtotal = input.required<number>();
}
