/**
 * Componente que muestra la lista del usuario y 
 * permite moverse arriba y abajo para cambiar el seleccionado
 * @author Andrei, Jorge y Sergio
 * @version 1.0
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NenomonsService } from '../../services/nenomons.service';

@Component({
  selector: 'app-user-nenodex-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-nenodex-list.html',
  styleUrls: ['./user-nenodex-list.css']
})
export class UserNenodexList implements OnInit {
  userNenomons: any[] = [];
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

  constructor(private nenomonsService: NenomonsService) {}

  ngOnInit() {
    this.nenomonsService.userList$.subscribe(lista => {
      this.userNenomons = lista;
      if (this.userNenomons.length && this.selectedIndex >= this.userNenomons.length) {
        this.selectedIndex = this.userNenomons.length - 1;
      }
      this.updateServiceSelection();
    });
  }

  subir() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.updateServiceSelection();
    }
  }

  bajar() {
    if (this.selectedIndex < this.userNenomons.length - 1) {
      this.selectedIndex++;
      this.updateServiceSelection();
    }
  }

  // Actualiza la selección en el servicio
  private updateServiceSelection() {
    if (this.userNenomons.length > 0 && this.selectedIndex >= 0) {
      this.nenomonsService.setSelectedUserNenomon(this.userNenomons[this.selectedIndex]);
    } else {
      this.nenomonsService.setSelectedUserNenomon(null);
    }
  }

  // Nueva función para eliminar un nenomon de la lista
  deleteNenomon(nenomon: any) {
    this.nenomonsService.removeFromUserNenodex(nenomon.id);
    alert(nenomon.name + " eliminado de tu lista!");
  }

  get selectedNenomon() {
    return this.userNenomons[this.selectedIndex];
  }
}
