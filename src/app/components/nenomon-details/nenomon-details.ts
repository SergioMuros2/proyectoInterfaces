import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NenomonsService } from '../../services/nenomons.service';

@Component({
  selector: 'app-nenomon-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nenomon-details.html',
  styleUrls: ['./nenomon-details.css']
})
export class NenomonDetailsComponent {
  isVisible = false;
  currentNenomon: any = null;

  // Datos de descripción para cada Nenomon
  nenomonDescriptions: { [key: string]: string } = {
    // Línea Planta/Veneno
    'Todrilillo': 'Una pequeña semilla Nenomon que adora la luz solar. Sus hojas pueden realizar la fotosíntesis incluso de noche y emite un suave brillo en la oscuridad.',
    'Todrilo': 'Ha desarrollado espinas venenosas para defenderse de depredadores. Su aroma dulce atrae a insectos beneficiosos que lo protegen.',
    'Todrilon': 'El evolucionado final, capaz de controlar tanto el poder de las plantas como toxinas letales. Extremadamente protector con su territorio.',

    // Línea Fuego (Serpiente → 3 cabezas)
    'Forax': 'Una serpiente Nenomon que almacena calor en sus escamas. Puede alcanzar temperaturas sorprendentes cuando se siente amenazado.',
    'Forasek': 'Evoluciona desarrollando una segunda cabeza. Ambas cabezas piensan independientemente pero cooperan en la caza y defensa.',
    'Forserorax': 'La forma final con tres cabezas. Cada cabeza controla un aspecto diferente: ofensiva, defensiva y estratégica. Temido por su ferocidad.',

    // Línea Agua (Pez espada → Tiburón metálico)
    'Swinttie': 'Un ágil pez espada Nenomon que corta el agua a velocidades increíbles. Su hocico puede perforar rocas.',
    'Sworddna': 'Desarrolla aletas dorsales afiladas como cuchillas. Caza en cardumen usando tácticas de coordinación perfecta.',
    'Sworddiran': 'La evolución final: mitad pez espada, mitad tiburón con refuerzos metálicos. Sus escamas de acero lo hacen casi invulnerable.',

    // Legendarios
    'Bakkar': 'Legendario murciélago hecho de humo y sombras. Vuela silenciosamente por la noche, dejando solo un rastro de oscuridad.',
    'Luminee': 'Legendario pájaro divino con plumas de cristal luminiscente. Cada cristal contiene la esencia de una estrella.'
  };

  constructor(private nenomonsService: NenomonsService) {}

  openDetails() {
    const selected = this.nenomonsService.getSelectedUserNenomon();

    if (!selected) {
      alert("Selecciona un Nenomon de tu lista para ver sus detalles");
      return;
    }

    this.currentNenomon = selected;
    this.isVisible = true;
  }

  closeDetails() {
    this.isVisible = false;
    this.currentNenomon = null;
  }

  getDescription(nenomonName: string): string {
    return this.nenomonDescriptions[nenomonName] || 'Un misterioso Nenomon con habilidades únicas que aún no han sido completamente documentadas.';
  }
}
