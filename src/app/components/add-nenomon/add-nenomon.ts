import { Component } from '@angular/core';
import { NenomonsService } from '../../services/nenomons.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-nenomon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-nenomon.html',
  styleUrls: ['./add-nenomon.css']
})
export class AddNenomonComponent {

  constructor(private nenomonsService: NenomonsService) {}

  addNenomon() {
    const selected = this.nenomonsService.getSelected();

    if (!selected) {
      alert("No hay un nenomon seleccionado");
      return;
    }

    this.nenomonsService.addToUserNenodex(selected);
    alert(selected.name + " añadido a tu lista!");
  }
}
