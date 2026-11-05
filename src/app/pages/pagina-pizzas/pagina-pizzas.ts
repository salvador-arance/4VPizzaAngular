import { Component, OnDestroy, signal } from '@angular/core';
import { Footer } from '../../organisms/footer/footer';
import { Header } from '../../organisms/header/header';
import { ListaPizzas } from '../../organisms/lista-pizzas/lista-pizzas';
import { Navbar } from '../../organisms/navbar/navbar';
import { PedidoService } from '../../services/pedido-service';

@Component({
  imports: [Navbar, Header, ListaPizzas, Footer],
  selector: 'app-pagina-pizzas',
  styleUrl: './pagina-pizzas.scss',
  templateUrl: './pagina-pizzas.html',
})
export class PaginaPizzas implements OnDestroy {
  protected readonly filtro = signal('');
  constructor(protected pedidoService: PedidoService) {}

  ngOnDestroy(): void {
    this.pedidoService.mensajeGracias.set('');
  }

  protected filtrarPizzas(texto: string) {
    this.filtro.set(texto);
  }
}
