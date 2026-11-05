import { Component, input } from '@angular/core';
import { Ingrediente } from '../../atoms/ingrediente/ingrediente';
import { Precio } from '../../atoms/precio/precio';
import { SelectorCantidad } from '../../molecules/selector-cantidad/selector-cantidad';
import { PedidoService } from '../../services/pedido-service';

@Component({
  imports: [Precio, Ingrediente, SelectorCantidad],
  selector: 'app-pizza-card',
  styleUrl: './pizza-card.scss',
  templateUrl: './pizza-card.html',
})
export class PizzaCard {
  readonly nombre = input.required<string>();
  readonly precio = input.required<number>();
  readonly imagen = input.required<string>();
  readonly ingredientes = input<string[]>([]);

  constructor(private pedidoService: PedidoService) {}

  protected anadirAlPedido(cantidad: number) {
    this.pedidoService.anadirPizza(this.nombre(), this.precio(), cantidad);
  }
}
