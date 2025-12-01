/**
 * Componente que te muestra la lista principal de nenomons
 * Permitiendote moverte abajo y arriba para seleccionar
 * @author Andrei, Jorge y Sergio
 * @version 1.0
 */
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NenomonsService } from '../../services/nenomons.service';

@Component({
  selector: 'app-nenodex-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nenodex-list.html',
  styleUrl: './nenodex-list.css',
})
export class NenodexList {
  @ViewChild('nenomonGrid') nenomonGrid!: ElementRef;

  nenomons = [
    { id: 1, name: 'Todrilillo', type: 'Planta', sprite: 'Todrilillo.png' },
    { id: 2, name: 'Todrilo', type: 'Planta/Veneno', sprite: 'Todrilo.png' },
    { id: 3, name: 'Todrilon', type: 'Planta/Veneno', sprite: 'Todrilon.png' },
    { id: 4, name: 'Forax', type: 'Fuego', sprite: 'Forax.png' },
    { id: 5, name: 'Forasek', type: 'Fuego', sprite: 'Forasek.png' },
    { id: 6, name: 'Forserorax', type: 'Fuego/Siniestro', sprite: 'Forserorax.png' },
    { id: 7, name: 'Swinttie', type: 'Agua', sprite: 'Swinttie.png' },
    { id: 8, name: 'Sworddna', type: 'Agua', sprite: 'Sworddna.png' },
    { id: 9, name: 'Sworddiran', type: 'Agua/Acero', sprite: 'Sworddiran.png' },
    { id: 10, name: 'Bakkar', type: 'Siniestro/Volador', sprite: 'Bakkar.png' },
    { id: 11, name: 'Luminee', type: 'Hada/Volador', sprite: 'Luminee.png' }
  ];

  selectedIndex = 0;

  getTypeClass(type: string): string {
    const typeMap: { [key: string]: string } = {
      'Planta': 'planta',
      'Veneno': 'veneno',
      'Fuego': 'fuego',
      'Siniestro': 'siniestro',
      'Acero': 'acero',
      'Agua': 'agua',
      'Volador': 'volador',
      'Hada': 'hada'
    };
    return typeMap[type] || 'normal';
  }

  subir() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.nenomonsService.setSelected(this.nenomons[this.selectedIndex]);
      this.scrollToSelected();
    }
  }

  bajar() {
    if (this.selectedIndex < this.nenomons.length - 1) {
      this.selectedIndex++;
      this.nenomonsService.setSelected(this.nenomons[this.selectedIndex]);
      this.scrollToSelected();
    }
  }

  // Función para hacer scroll automáticamente
  private scrollToSelected() {
    setTimeout(() => {
      const gridElement = this.nenomonGrid.nativeElement;
      const selectedElement = gridElement.querySelector('.nenomon-card.selected');

      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest'
        });
      }
    }, 0);
  }

  constructor(private nenomonsService: NenomonsService) {}

  ngOnInit() {
    this.nenomonsService.setSelected(this.nenomons[0]);
  }
}
