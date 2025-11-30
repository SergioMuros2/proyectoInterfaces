import { Component } from '@angular/core';
import { NenomonsService } from '../../services/nenomons.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-nenomon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-nenomon.html',
  styleUrls: ['./delete-nenomon.css']
})
export class DeleteNenomonComponent {

  constructor(private nenomonsService: NenomonsService) {}

  deleteNenomon() {
    const selected = this.nenomonsService.getSelected();

    if (!selected) {
      alert("No hay un nenomon seleccionado");
      return;
    }

    if (confirm(`¿Estás seguro de que quieres eliminar a ${selected.name} de tu lista?`)) {
      this.nenomonsService.removeFromUserNenodex(selected.id);
      alert(selected.name + " eliminado de tu lista!");
    }
  }
}
