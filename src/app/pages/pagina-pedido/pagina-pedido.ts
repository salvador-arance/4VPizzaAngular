import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Footer } from '../../organisms/footer/footer';
import { FormularioPedido } from '../../organisms/formulario-pedido/formulario-pedido';
import { Header } from '../../organisms/header/header';
import { Navbar } from '../../organisms/navbar/navbar';
import { ResumenPedido } from '../../organisms/resumen-pedido/resumen-pedido';
import { PedidoService } from '../../services/pedido-service';

@Component({
  imports: [RouterLink, Navbar, Header, ResumenPedido, FormularioPedido, Footer],
  selector: 'app-pagina-pedido',
  styleUrl: './pagina-pedido.scss',
  templateUrl: './pagina-pedido.html',
})
export class PaginaPedido {
  constructor(protected pedidoService: PedidoService, private router: Router) {}

  protected confirmarPago(mensajeEntrega: string) {
    this.pedidoService.mensajeGracias.set('¡Gracias por tu pedido! ' + mensajeEntrega);
    this.limpiarPedido();
  }

  protected limpiarPedido() {
    this.pedidoService.limpiarPedido();
    this.router.navigate(['/pizzas']);
    window.scrollTo(0, 0);
  }
}
