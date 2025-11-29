import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NenomonsService } from '../../services/nenomons.service';


@Component({
  selector: 'app-nenodex-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nenodex-list.html',
  styleUrl: './nenodex-list.css',
})
export class NenodexList {
  nenomons = [
    { id: 1, name: 'Todrilillo', type: 'Planta', sprite: 'f1.png' },
    { id: 2, name: 'Todrilo', type: 'Planta/Veneno', sprite: 'f2.png' },
    { id: 3, name: 'Todrilon', type: 'Planta/Veneno', sprite: 'f3.png' }
  ];

  selectedIndex = 0; // ← por defecto el primero
subir() {
  if (this.selectedIndex > 0) {
    this.selectedIndex--;
    this.nenomonsService.setSelected(this.nenomons[this.selectedIndex]);
  }
}

bajar() {
  if (this.selectedIndex < this.nenomons.length - 1) {
    this.selectedIndex++;
    this.nenomonsService.setSelected(this.nenomons[this.selectedIndex]);
  }
}

 
constructor(private nenomonsService: NenomonsService) {}
ngOnInit() {
  this.nenomonsService.setSelected(this.nenomons[0]);
}

}
