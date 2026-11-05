import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-precio',
  styleUrl: './precio.scss',
  templateUrl: './precio.html',
})
export class Precio {
  readonly valor = input.required<number>();

  protected readonly texto = computed(() =>
    this.valor().toFixed(2).replace('.',',') + '€');
}
