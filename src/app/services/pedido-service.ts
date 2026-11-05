import { computed, Inject, Injectable, signal } from '@angular/core';
import { LineaPedidoModel } from '../models/linea-pedido-model';

@Injectable({
    providedIn: 'root'
})

export class PedidoService {
    readonly lineas = signal<LineaPedidoModel[]>([]);
    readonly mensajeGracias = signal('');

    readonly totalPizzas = computed(() => {
        let total = 0;
        for (const linea of this.lineas()) {
            total += linea.cantidad;
        }
        return total;
    })

    readonly importeTotal = computed(() => {
        let total = 0;
        for (const linea of this.lineas()) {
            total += linea.subtotal();
        }
        return total;
    })

    añadirPizza(nombre: string, precio: number, cantidad: number) {
        const lineas = this.lineas();

        // como se parece esto a linq!
        const lineaExistente = lineas.find(linea =>
            linea.nombre === nombre);
        
        if (lineaExistente) {
            lineaExistente.cantidad += cantidad;
            this.lineas.set([...lineas]);
        } else {
            this.lineas.set([...lineas, new LineaPedidoModel(nombre, precio, cantidad)]);
        }
    }

    limpiarPedido() {
        this.lineas.set([]);
    }
}