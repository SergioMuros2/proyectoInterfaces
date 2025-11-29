import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nenodex-list',
  imports: [CommonModule],
  templateUrl: './nenodex-list.html',
  styleUrl: './nenodex-list.css',
})
export class NenodexList {
  nenomons = [
    { id: 1, name: 'Totti', type: 'Planta', sprite: 'f1.png' },
    { id: 2, name: 'Totto', type: 'Planta/Veneno', sprite: 'f2.png' },
    { id: 3, name: 'Totton', type: 'Planta/Veneno', sprite: 'f3.png' }
  ];
}
