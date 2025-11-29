import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-nenodex-list',
  imports: [CommonModule], // ← Necesario para *ngIf y *ngFor
  templateUrl: './user-nenodex-list.html',
  styleUrl: './user-nenodex-list.css',
})
export class UserNenodexList {
  // Lista de Nenomons del usuario - empieza vacía
  userNenomons: any[] = [];
}
