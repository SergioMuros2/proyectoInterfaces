import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NenodexFrame } from './nenodex-frame/nenodex-frame';
import { NenodexList } from './nenodex-list/nenodex-list';
import { UserNenodexList } from './user-nenodex-list/user-nenodex-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NenodexFrame, NenodexList, UserNenodexList], // ← Agregar NenodexFrame aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoInterfaces');
}
