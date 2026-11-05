import { Routes } from '@angular/router';
import { PaginaPizzas } from './pages/pagina-pizzas/pagina-pizzas';
import { PaginaPedido } from './pages/pagina-pedido/pagina-pedido';

export const routes: Routes = [
  { path: 'pizzas', component: PaginaPizzas, title: '4V Pizza - Pizzas' },
  { path: 'pedido', component: PaginaPedido, title: '4V Pizza - Pedido' },
  { path: '**', redirectTo: '/pizzas' },
];