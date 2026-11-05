import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  readonly titulo = input.required<string>();
  readonly subtitulo = input('');
}
