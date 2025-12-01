import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NenodexFrame } from '../../nenodex-frame/nenodex-frame';
import { NenodexList } from '../../nenodex-list/nenodex-list';
import { UserNenodexList } from '../../user-nenodex-list/user-nenodex-list';
import { CommonModule } from '@angular/common';
import { AddNenomonComponent } from "../../add-nenomon/add-nenomon";
import { DeleteNenomonComponent } from "../../delete-nenomon/delete-nenomon";
import { NenomonDetailsComponent } from "../../nenomon-details/nenomon-details";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule,
    NenodexFrame,
    NenodexList,
    UserNenodexList,
    AddNenomonComponent,
    DeleteNenomonComponent,
    NenomonDetailsComponent
  ],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements AfterViewInit {
  @ViewChild('backgroundMusic') backgroundMusic!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit() {
    // Intentar reproducir automáticamente
    this.playBackgroundMusic();
  }

  private playBackgroundMusic() {
    if (this.backgroundMusic?.nativeElement) {
      const audio = this.backgroundMusic.nativeElement;

      // Configurar volumen (0.0 a 1.0)
      audio.volume = 0.5; // 50% de volumen

      // Intentar reproducir
      const playPromise = audio.play();

      // Manejar errores de autoplay
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Autoplay bloqueado. La música se reproducirá tras la primera interacción del usuario.');

          // Reproducir al hacer clic en cualquier parte
          document.addEventListener('click', () => {
            audio.play().catch(e => console.log('Error al reproducir música:', e));
          }, { once: true }); // Solo una vez
        });
      }
    }
  }
}
