import { Component, input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { PizzaModel } from '../../models/pizza-model';
import { PizzaCard } from '../pizza-card/pizza-card';

@Component({
  imports: [PizzaCard],
  selector: 'app-lista-pizzas',
  styleUrl: './lista-pizzas.scss',
  templateUrl: './lista-pizzas.html',
})
export class ListaPizzas {
  readonly filtro = input('');
  protected pizzas: PizzaModel[] = [];
  protected readonly pizzasFiltradas = signal<PizzaModel[]>([]);

  ngOnInit() {
    this.cargarPizzas();
    this.filtrarPizzas();
  }

  private cargarPizzas() {
    this.pizzas = [
      new PizzaModel('Margarita', 8.5, 'pizzas/pizza-01.jpg', ['🍅 Tomate', '🧀 Mozzarella', '🌿 Albahaca']),
      new PizzaModel('BBQ', 12, 'pizzas/pizza-09.jpg', ['🍖 Salsa barbacoa', '🧀 Mozzarella', '🥩 Ternera', '🧅 Cebolla']),
      new PizzaModel('Napolitana', 10, 'pizzas/pizza-04.jpg', ['🍅 Tomate', '🧀 Mozzarella', '🐟 Anchoas', '🌿 Orégano']),
      new PizzaModel('Vegetariana', 10.5, 'pizzas/pizza-08.jpg', ['🍅 Tomate', '🧀 Mozzarella', '🌽 Maíz', '🫑 Pimiento', '🫒 Aceitunas']),
      new PizzaModel('Carbonara', 11.5, 'pizzas/pizza-02.jpg', ['🥛 Nata', '🧀 Mozzarella', '🥓 Bacon', '🍄 Champiñones']),
      new PizzaModel('Diavola', 11, 'pizzas/pizza-07.jpg', ['🍅 Tomate', '🧀 Mozzarella', '🌶️ Salami picante', '🌿 Albahaca']),
      new PizzaModel('Hortelana', 10.5, 'pizzas/pizza-03.jpg', ['🥛 Nata', '🧀 Mozzarella', '🌱 Cebolleta', '🌿 Perejil']),
      new PizzaModel('Formaggi', 12.5, 'pizzas/pizza-10.jpg', ['🧀 Mozzarella', '🧀 Provolone', '🧀 Parmesano', '🧀 Queso azul']),
    ];
  }

  private filtrarPizzas() {
    const texto = this.filtro().trim().toLowerCase();

    const resultado = this.pizzas.filter(pizza =>
      pizza.ingredientes.some(ingrediente => ingrediente.toLowerCase().includes(texto))
    );

    this.pizzasFiltradas.set(resultado);
  }
}
