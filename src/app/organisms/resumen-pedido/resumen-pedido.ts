import { Component } from '@angular/core';
import { Precio } from '../../atoms/precio/precio';
import { LineaPedido } from '../../molecules/linea-pedido/linea-pedido';
import { PedidoService } from '../../services/pedido-service';

@Component({
  imports: [Precio, LineaPedido],
  selector: 'app-resumen-pedido',
  styleUrl: './resumen-pedido.scss',
  templateUrl: './resumen-pedido.html',
})

export class ResumenPedido {
  constructor(protected pedidoService: PedidoService) {}
}
