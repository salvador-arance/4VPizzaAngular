import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from '../../atoms/logo/logo';
import { Buscador } from '../../molecules/buscador/buscador';
import { PedidoService } from '../../services/pedido-service';

@Component({
  imports: [RouterLink, RouterLinkActive, Logo, Buscador],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})

export class Navbar {
  readonly conBuscador = input(false);
  readonly buscar = output<string>();

  constructor(protected pedidoService: PedidoService) {}

  protected reenviarBusqueda(texto: string) {
    this.buscar.emit(texto);
  }
}
