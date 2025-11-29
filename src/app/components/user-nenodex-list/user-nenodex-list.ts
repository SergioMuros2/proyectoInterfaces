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
  selectedIndex = 0; // ← por defecto el primero

  constructor(private nenomonsService: NenomonsService) {}

  ngOnInit() {
    this.nenomonsService.userList$.subscribe(lista => {
      this.userNenomons = lista;
      // Aseguramos que el seleccionado siempre sea válido
      if (this.userNenomons.length && this.selectedIndex >= this.userNenomons.length) {
        this.selectedIndex = this.userNenomons.length - 1;
      }
    });
  }

  subir() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }

  bajar() {
    if (this.selectedIndex < this.userNenomons.length - 1) {
      this.selectedIndex++;
    }
  }

  get selectedNenomon() {
    return this.userNenomons[this.selectedIndex];
  }
}

